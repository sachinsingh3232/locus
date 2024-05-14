const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
    productId: {
        type: mongoose.ObjectId,
        ref: "category",
        required: true
    },
    sales: {
        type: Number,
        required: true
    },
    month:{
        type: String,
        required: true
    }
})

const Sales = new mongoose.model('Sales', salesSchema);
module.exports = Sales;