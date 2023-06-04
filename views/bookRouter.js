const router = require('express').Router();

const booksController = require('../controllers/booksController');



router.get('/', booksController.getAllBooks);
router.post('/', booksController.createBook);
router.put('/', booksController.updateBook);
router.delete('/', booksController.deleteBook);


module.exports = router;