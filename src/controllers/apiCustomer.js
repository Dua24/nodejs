const { uploadSingleFile } = require("../services/FileServices")
const { postNewCustomer, postNewManyCustomers, getAllCustomers, putUpdateCustomer, deleteCustomer, deleteManyCustomer } = require("../services/CustomerServices")
module.exports = {
    postNewCustomerApi: async (req, res) => {
        const { name, address, phone, email, description } = req.body
        let imageUrl = ''
        if (!req.files || Object.keys(req.files).length === 0) {
            // do nothing
        } else {
            const result = await uploadSingleFile(req.files.image)
            imageUrl = result.path
        }

        const dataCustomer = { name, address, phone, email, image: imageUrl, description }
        const customer = await postNewCustomer(dataCustomer)
        return res.status(200).json({
            errorCode: 0,
            data: customer
        })
    },
    postNewManyCustomerApi: async (req, res) => {
        const arrayDataCustomer = req.body.customers
        const customers = await postNewManyCustomers(arrayDataCustomer)
        if (customers) {
            return res.status(200).json({
                errorCode: 0,
                data: customers
            })
        } else {
            return res.status(200).json({
                errorCode: -1,
                data: customers
            })
        }

    },
    getAllCustomersApi: async (req, res) => {
        const { limit, page } = req.query
        const result = await getAllCustomers(limit, page, req.query)
        return res.status(200).json({
            errorCode: 0,
            data: result
        })
    },
    putUpdateCustomerApi: async (req, res) => {
        const { id, name, address, phone, email, description } = req.body
        let imageUrl = ''
        if (!req.files || Object.keys(req.files).length === 0) {
            // do nothing
        } else {
            const result = await uploadSingleFile(req.files.image)
            imageUrl = result.path
        }

        const dataUpdateCustomer = { id, name, address, phone, email, image: imageUrl, description }
        const customer = await putUpdateCustomer(dataUpdateCustomer)
        return res.status(200).json({
            errorCode: 0,
            data: customer
        })
    },
    deleteCustomer: async (req, res) => {
        const { id } = req.body
        const result = await deleteCustomer(id)
        return res.status(200).json({
            errorCode: 0,
            data: result
        })
    },
    deleteMultiCustomer: async (req, res) => {
        const { customers } = req.body
        const result = await deleteManyCustomer(customers)
        return res.status(200).json({
            errorCode: 0,
            data: result
        })
    }
}