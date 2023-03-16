const express = require('express')
const router = express.Router()
const { getHomepageApi, postNewUserApi, putUpdateUserApi, deleteUser, postSingleFile, postMultiFile } = require('../controllers/apiController')
const { postNewCustomerApi, postNewManyCustomerApi
    , getAllCustomersApi, putUpdateCustomerApi, deleteCustomer,
    deleteMultiCustomer
} = require('../controllers/apiCustomer')

const { getAllQuizz, postAQuizz } = require('../controllers/apiQuizz')

router.get('/', (req, res) => {
    res.send("Route with api")
})

router.get('/quizz', getAllQuizz)
router.post('/quizz', postAQuizz)
//




router.get('/users', getHomepageApi)
router.post('/users', postNewUserApi)
router.put('/users', putUpdateUserApi)
router.delete('/users', deleteUser)

router.post('/file', postSingleFile)
router.post('/files', postMultiFile)

router.get('/customers', getAllCustomersApi)
router.post('/customers', postNewCustomerApi)
router.post('/customers-many', postNewManyCustomerApi)
router.put('/customers', putUpdateCustomerApi)
router.delete('/customers', deleteCustomer)
router.delete('/customers-many', deleteMultiCustomer)





module.exports = router
