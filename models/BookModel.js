const mongoose = require('mongoose')

var BookSchema = mongoose.Schema({
    title: String,
    author: String,
    date: Date,
    image: String,
    price: Number,
    quantity: Number,
    video: String
})

var BookModel = mongoose.model("sach", BookSchema, "book")

module.exports = BookModel