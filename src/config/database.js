require('dotenv').config()
const mysql = require('mysql2');

//test connection
const connection = mysql.createConnection({
    host: process.env.HOST_NAME,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, //default emty ''
    port: process.env.DB_PORT //default 3306
});

module.exports = connection;