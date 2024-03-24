# **RinggitSavvy:  Comprehensive Financial Literacy App**

Introducing **RinggitSavvy**, a comprehensive financial literacy app, which aligns with **SDG 1: No Poverty**. It is designed to empower Malaysian youths with the knowledge and skills needed to make informed financial decisions and build financial resilience. 

With a range of features including bite-sized learning modules, risk management assessment, news updates, AI chatbot, podcasts, community forums, and mentorship opportunities, RinggitSavvy aims to democratise access to financial education and promote financial inclusion among Malaysian youths.

>Developed by, **Team MoneyMoneyCome**



## Features
- **Bite-sized Learning Modules**: Access quick, digestible lessons on various financial topics to boost your financial literacy on-the-go.
- **Risk Management Assessment**: Evaluate your risk tolerance and make informed decisions that align with your financial goals.
- **News Updates**: Stay informed with the latest financial news and market trends, curated to keep you ahead in your financial journey.
- **AI Chatbot**: Get instant, personalized financial guidance and support 24/7.
- **Community Forums**: Join a vibrant community of like-minded individuals to share insights, learn from others' experiences, and grow your financial knowledge together.
- **Mentorship Opportunities**: Connect with industry experts for one-on-one guidance and support tailored to your financial goals and aspirations.
-  **Finance Podcasts**: Listen to podcasts featuring expert discussions, interviews, and insights on various finance-related topics to expand your knowledge and stay informed.


## Setup Guide for [Ringgit Savvy]

### Prerequisites
Before you start, ensure you have the following prerequisites installed:

1. **Node.js and npm**: Install Node.js and npm from [Node.js website](https://nodejs.org/).

2. **Expo CLI **: You can install Expo CLI globally:
   ```
   npm install -g expo-cli
   ```
3. **MySQL Database (Optional)**: 
   - Only the Risk Tolerance Assessment feature requires MySQL setup. Feel free to skip MySQL setup; the app will function perfectly without this feature.
   - You need to have MySQL installed on your machine. If you haven't installed MySQL yet, refer to the [MySQL installation guide](https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/).


### Cloning the Repository
1. Open your terminal.

2. Navigate to the directory where you want to clone the repository.

3. Clone the repository using the following command:
   ```
   git clone https://github.com/your-username/RinggitSavy.git
   ```
   Replace `your-username` with your GitHub username and `your-react-native-app` with the name of your repository.

### Setting Up MySQL Database
1. Open your MySQL client (e.g., MySQL Workbench).

2. Create a new schema:
   ```sql
   CREATE SCHEMA `your_database_name`;
   ```
   Replace `your_database_name` with the desired name for your database.

3. Execute the SQL scripts located in `src/components/Quiz-JS/Services/`:
   - **Table Creation**: Open `TableCreation.sql` and execute the script to create the necessary tables.
   - **Data Insertion**: Open `DataInsertion.sql` and execute the script to insert initial data into the tables.

4. Modify database connection details:
   - Open `connectDB.js` located in `src/components/Quiz-JS/Services/`.
   - Update the host, username, password, and database name as per your MySQL configuration.

### Installation
1. Navigate into the cloned repository:
   ```
   cd your-react-native-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the App
1. If you're using Expo, start the Expo development server:
   ```
   expo start
   ```

2. Follow the instructions provided by Expo to run the app on your preferred platform (iOS or Android simulator, or a physical device).

3. If you're not using Expo, you can run the app using:
   ```
   npm start
   ```

### Note
- Ensure your MySQL server is running before starting the app for the fully functional app
- Make sure to update the database connection details in `connectDB.js` to match your MySQL configuration.
- But again, it is totally fine to ignore the set up of MySQL as the app will still function perfectly without this feature

---

This guide should help you set up and run your Ringgit Savvy app smoothly.

## Contact Us
Kindly contact Team MoneyMoneyCome for more details:

| Full Name | Email Address  |
|:-:|:-:|
| Lim Ting Juin | lim.tingjuin5789@gmail.com|
| Leon Then Leong Onn | leonthen0218@gmail.com |
| Anson Kiu Yi Kai | ansonkiu0212@gmail.com|


> **Note:** This application is made for V HACK 2024 - Preliminary Round Submission, targeting Case Study 2: Enhancing Financial Literacy on Capital Market.
