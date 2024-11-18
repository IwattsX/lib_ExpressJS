const express = require('express');
const router = express.Router();
const {
    createBook,
    getAllBooks,
    updateBook,
    deleteBook,
} = require('../controllers/bookController');
const validateBooks = require('../middleware/validateBooks');

router.post('/', validateBooks, createBook);
router.get('/', getAllBooks);
router.put('/:id', validateBooks, updateBook);
router.delete('/:id', deleteBook);

module.exports = router;
