const express = require('express')
const router = express.Router()
const { getHomepage, getViews } = require('../controllers/homeController')

router.get('/', getHomepage)
router.get('/views', getViews)

module.exports = router
