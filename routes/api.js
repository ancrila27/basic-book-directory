// routes to perform CRUD operations
const router = require('express').Router();
const booksModel = require('../model/books.repo');

let booksDirectory = booksModel;

router.get('/books', async (req, res) => {
    console.log('getting books...');
    res.send(booksDirectory);

});

module.exports = router;