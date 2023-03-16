const Quizz = require('../models/Quizz')
const User = require('../models/User')
const { uploadSingleFile, uploadMultiFile } = require('../services/FileServices')

module.exports = {
    getAllQuizz: (req, res) => {
        return res.send("ALL QUIZ")
    },

    postAQuizz: async (req, res) => {
        const { description, name, difficulty, quizImage } = req.body
        const quizz = await Quizz.create({ name, description, image: quizImage, difficulty })
        console.log(quizz)
        return res.send("DA TAO")
        // return res.status(200).json({
        //     DT:
        //     errorCode: 0,
        //     data: quizz
        // })
    }
}

