const User = require('../models/User')
const { uploadSingleFile, uploadMultiFile } = require('../services/FileServices')
const getHomepageApi = async (req, res) => {
    const result = await User.find({})
    return res.status(200).json({
        errorCode: 0,
        data: result
    })
}
const postNewUserApi = async (req, res) => {

    //c2 use promise
    const { email, name, city } = req.body
    const user = await User.create({ name, email, city })
    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}

const putUpdateUserApi = async (req, res) => {
    const { id, email, name, city } = req.body
    const user = await User.findByIdAndUpdate(id, { name, email, city })
    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}

const deleteUser = async (req, res) => {
    const { id } = req.body
    const user = await User.findByIdAndDelete(id)

    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}

const postSingleFile = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    const result = await uploadSingleFile(req.files.image)
    console.log("CHECK RESULT >>>", result);
    res.send(result)
}

const postMultiFile = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    const result = await uploadMultiFile(req.files.image)
    console.log("CHECK RESULT >>>", result);
    res.send(result)
}

module.exports = {
    getHomepageApi, postNewUserApi, putUpdateUserApi, deleteUser, postSingleFile, postMultiFile,
}