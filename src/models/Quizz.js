const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
const quizzSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        description: String,
        image: String,
        difficulty: String,
    },
    {
        //createAt, updateAt
        timestamps: true

    });

// soft delete
quizzSchema.plugin(mongoose_delete, { overrideMethods: 'all' })

const Quizz = mongoose.model('quizz', quizzSchema);

module.exports = Quizz