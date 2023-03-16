const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
const customerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        address: String,
        phone: String,
        email: String,
        image: String,
        description: String
    },
    {
        //createAt, updateAt
        timestamps: true

    });

// soft delete
customerSchema.plugin(mongoose_delete, { overrideMethods: 'all' })

const CUSTOMER = mongoose.model('customer', customerSchema);

module.exports = CUSTOMER