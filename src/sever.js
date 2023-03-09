require('dotenv').config()
const express = require('express')
const viewEngines = require("./config/viewEngines")
const webRoutes = require('./routes/web')
const app = express()
const port_backend = process.env.PORT_BACKEND || 8888
const hostname = process.env.HOST_NAME

viewEngines(app)

// get input form
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies


app.use('/', webRoutes)




app.listen(port_backend, hostname, () => {
  console.log(`Example app listening on address ${hostname} port ${port_backend}`)
})