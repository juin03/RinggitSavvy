--MySQL 
--Drop Table
DROP TABLE IF EXISTS options;
DROP TABLE IF EXISTS quiz;


--Create Table 
CREATE TABLE quiz
(
    quiz_id INT AUTO_INCREMENT,
    quizQuestion VARCHAR(1000) NOT NULL,
    PRIMARY KEY (quiz_id)
);

CREATE TABLE options
(
    options_id INT AUTO_INCREMENT,
    quizOption VARCHAR(1000) NOT NULL,
    quiz_id INT,
    optionWeightage INT,
    PRIMARY KEY (options_id),
    FOREIGN KEY (quiz_id) REFERENCES quiz(quiz_id) ON DELETE CASCADE
);