const express = require('express')
const router = express.Router()
const { getHomepage, getViews, postNewUser, getPageCreate, getPageUpdate, postUpdateUser, getPageDelete, postDeleteUser } = require('../controllers/homeController')

router.get('/', getHomepage)
router.get('/views', getViews)

router.post('/create-user', postNewUser)
router.get('/create', getPageCreate)

router.get('/update/:userId', getPageUpdate)
router.post('/update-user', postUpdateUser)

router.post('/delete-user/:userId', getPageDelete)
router.post('/delete-user', postDeleteUser)


module.exports = router
