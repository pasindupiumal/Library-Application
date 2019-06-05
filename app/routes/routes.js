const express = require('express');
const router = express.Router();
const BookRouter = require('../controllers/BookController');
const AuthorRouter = require('../controllers/AuthorController');

router.use('/books/', BookRouter);
router.use('/authors/', AuthorRouter);

module.exports = router;
