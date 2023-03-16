const e = require("express")
const Customer = require("../models/Customer")
const aqp = require('api-query-params')
module.exports = {
    postNewCustomer: async (dataCustomer) => {
        try {
            const { name, address, phone, email, image, description } = dataCustomer
            const result = await Customer.create({ name, address, phone, email, image, description })
            return result
        } catch (error) {
            console.log("error", error)
            return null
        }
    },
    postNewManyCustomers: async (arrayDataCustomer) => {
        try {
            const result = await Customer.insertMany(arrayDataCustomer)
            return result
        } catch (error) {
            return null
        }
    },
    getAllCustomers: async (limit, page, sq) => {
        let result = null;
        try {
            if (limit && page) {
                const offset = (page - 1) * limit
                const { filter } = aqp(sq)
                delete filter.page

                result = await Customer.find(filter).limit(limit).skip(offset).exec()
            } else {
                result = await Customer.find({})
            }
            return result
        } catch (error) {
            return null
        }
    },
    putUpdateCustomer: async (dataUpdateCustomer) => {
        const { id, name, address, phone, email, image, description } = dataUpdateCustomer
        try {
            const result = await Customer.updateOne({ _id: id }, { name, address, phone, email, image, description })
            return result
        } catch (error) {
            return null
        }
    },
    deleteCustomer: async (id) => {
        try {
            const result = await Customer.deleteById({ _id: id })
            return result
        } catch (error) {
            return null
        }
    },
    deleteManyCustomer: async (customersId) => {
        try {
            const result = await Customer.delete({ _id: { $in: customersId } })
            return result
        } catch (error) {
            return null
        }
    }
}