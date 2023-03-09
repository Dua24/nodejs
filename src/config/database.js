require('dotenv').config()
const mysql = require('mysql2/promise');

//test connection
const connection = mysql.createPool({
    host: process.env.HOST_NAME,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, //default emty ''
    port: process.env.DB_PORT, //default 3306
    waitForConnection: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = connection;