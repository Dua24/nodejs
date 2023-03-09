const connection = require('../config/database')

const postAUser = async (email, name, city) => {
    const [rows, fields] = await connection.query(`INSERT INTO Users (email,name,city) values (?,?,?)`, [email, name, city]);
    return rows
}

const getAllUser = async () => {
    const [rows, fields] = await connection.query(
        `SELECT * FROM Users`);
    return rows
}

const getUserById = async (id) => {
    const [rows, fields] = await connection.query(
        `SELECT * FROM Users WHERE Users.id= ?`, [id]);
    return rows
    // dont use: 'users.id = id'. Let use -> 'user.id = ? ,[id]' <- prevent err when wrong id
}

const updateUser = async (id, email, name, city) => {
    const [rows, fields] = await connection.query(
        `UPDATE Users
        SET email = ?, name = ?, city = ?
        WHERE Users.id = ?;`, [email, name, city, id]);
    return rows
}

const deleteUser = async (id) => {
    const [rows, fields] = await connection.query(
        `DELETE FROM Users WHERE id = ?;`, [id]);
    return rows
}

module.exports = { postAUser, getAllUser, getUserById, updateUser, deleteUser }