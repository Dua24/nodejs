const connection = require('../config/database')
const { postAUser, getAllUser, getUserById, updateUser, deleteUser } = require('../services/CRUDServices')
const User = require('../models/User')

const getHomepage = async (req, res) => {
    //c2: use promise
    const result = await User.find({})
    console.log("result>>>", result)
    res.render('homepage.ejs', { listUser: result })

}

const getViews = (req, res) => {
    res.render('example.ejs')
}

const postNewUser = async (req, res) => {

    //c2 use promise
    const { email, name, city } = req.body
    // const rows = postAUser(email, name, city)

    // console.log(rows); // results contains rows returned by server
    User.create({ name, email, city })
    res.redirect('/')
}
const getPageCreate = (req, res) => {
    res.render('create.ejs')
}

const getPageUpdate = async (req, res) => {
    const user = await User.findById(req.params.userId)
    res.render('edit.ejs', { user: user })
}

const postUpdateUser = async (req, res) => {
    const { id, email, name, city } = req.body
    await User.findByIdAndUpdate(id, { name, email, city })
    res.redirect('/')
}

const getPageDelete = async (req, res) => {
    const user = await User.findById(req.params.userId)
    res.render('delete.ejs', { user: user })
}

const postDeleteUser = async (req, res) => {
    const { id } = req.body
    await User.findByIdAndDelete(id)

    res.redirect('/')
}


module.exports = { getHomepage, getViews, postNewUser, getPageCreate, getPageUpdate, postUpdateUser, getPageDelete, postDeleteUser }