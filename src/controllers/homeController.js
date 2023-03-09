const connection = require('../config/database')
const { postAUser, getAllUser, getUserById, updateUser, deleteUser } = require('../services/CRUDServices')

const getHomepage = async (req, res) => {
    //c1: use callback
    // connection.query(
    //     `SELECT * FROM Users`,
    //     function (err, results, fields) {
    //         console.log(results); // results contains rows returned by server
    //         res.render('homepage.ejs')
    //     }
    // );

    //c2: use promise
    const result = await getAllUser()
    console.log(result); // results contains rows returned by server
    res.render('homepage.ejs', { listUser: result })

}

const getViews = (req, res) => {
    res.render('example.ejs')
}

const postNewUser = async (req, res) => {
    //c1 use callback
    // connection.query(
    //     `INSERT INTO Users (email,name,city) 
    //     values (?,?,?)`,
    //     [email, name, city],
    //     function (err, results, fields) {
    //         console.log(results); // results contains rows returned by server
    //         res.send("Success")
    //     }
    // );

    //c2 use promise
    const { email, name, city } = req.body
    const rows = postAUser(email, name, city)
    console.log(rows); // results contains rows returned by server
    res.send("Create Success")

}
const getPageCreate = (req, res) => {
    res.render('create.ejs')
}

const getPageUpdate = async (req, res) => {
    const result = await getUserById(req.params.userId)
    let user = result && result.length > 0 ? result[0] : {}
    res.render('edit.ejs', { user: user })
}

const postUpdateUser = async (req, res) => {
    const { id, email, name, city } = req.body
    await updateUser(id, email, name, city)

    res.redirect('/')
}

const getPageDelete = async (req, res) => {
    const result = await getUserById(req.params.userId)
    let user = result && result.length > 0 ? result[0] : {}
    res.render('delete.ejs', { user: user })
}

const postDeleteUser = async (req, res) => {
    const { id } = req.body
    await deleteUser(id)

    res.redirect('/')
}


module.exports = { getHomepage, getViews, postNewUser, getPageCreate, getPageUpdate, postUpdateUser, getPageDelete, postDeleteUser }