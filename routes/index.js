var express = require('express')
const BookModel = require('../models/BookModel')
var router = express.Router()

router.get('/', async (req, res)=>{
  var books = await BookModel.find()
  //lay du lieu tu collection "books" va luu vao array
  //console.log(books)
  //res.send(books)
  res.render('book_list', {books : books})
})

module.exports = router