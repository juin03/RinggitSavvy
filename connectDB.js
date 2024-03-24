const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'your_database_name'
});

app.get('/option', (req, res) => {
    const quizNumber = req.query.number;
    if (!quizNumber) {
      return res.status(400).send({ error: 'Missing quiz number' });
    }
  
    const query = `SELECT quizOption, optionWeightage FROM options WHERE quiz_id = ?`;
    db.query(query, [quizNumber], (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  });

app.get('/quiz', (req, res) => {
    const quizNumber = req.query.number;
    if (!quizNumber) {
      return res.status(400).send({ error: 'Missing quiz number' });
    }

    const query = `SELECT quizQuestion FROM quiz WHERE quiz_id = ?`;
    db.query(query, [quizNumber], (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});



db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL: ', err.stack);
      return;
    }
    console.log('Connected to MySQL as id ' + db.threadId);
  });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});