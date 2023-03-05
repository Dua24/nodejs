require('dotenv').config()
const express = require('express')
const viewEngines = require("./config/viewEngines")
const webRoutes = require('./routes/web')
const app = express()
const port_backend = process.env.PORT_BACKEND || 8888
const hostname = process.env.HOST_NAME
const connection = require('./config/database')

viewEngines(app)

app.use('/', webRoutes)



connection.query(
  'SELECT * FROM Users',
  function (err, results, fields) {
    console.log('results', results); // results contains rows returned by server
    // console.log('fields', fields); // fields contains extra meta data about results, if available
  }
);


app.listen(port_backend, hostname, () => {
  console.log(`Example app listening on address ${hostname} port ${port_backend}`)
})