require('dotenv').config()
const express = require('express')
const viewEngines = require("./config/viewEngines")
const webRoutes = require('./routes/web')
const apiRoutes = require('./routes/api')
const connection = require('./config/database')
const fileUpload = require('express-fileupload');
const app = express()
const port_backend = process.env.PORT_BACKEND || 8888
const hostname = process.env.HOST_NAME


// config file upload
app.use(fileUpload());


// config res.body get input
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies



//config view engine app
viewEngines(app);

// check connection db when start sever
(async () => {
  try {
    await connection()
    app.use('/', webRoutes)
    app.use('/v1/api/', apiRoutes)
    app.listen(port_backend, hostname, () => {
      console.log(`Example app listening on address ${hostname} port ${port_backend}`)
    })
  } catch (error) {
    console.log("Error connection to db ", error)
  }
})()





