const path = require('path')
const express = require('express')

const viewEngines = (app) => {
    //view engines
    app.set('views', path.join('src', 'views'))
    app.set('view engine', 'ejs')

    //folder static
    app.use(express.static(path.join('src', 'public')))
}

module.exports = viewEngines