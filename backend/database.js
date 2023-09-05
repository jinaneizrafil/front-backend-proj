//step2 connection to database
//code to connect to my sql database, use .env file
// Import necessary packages
const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();
// Database configuration
const dbConfig = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD, //hawne bas bektob  hayk ma berja3 b3id l password la2an houwe mawjoud bel env
  database: process.env.DB_NAME,
});
module.exports = dbConfig;
