
const router = require('express').Router();

const booksRouter = require('./views/bookRouter');
const membersRouter = require('./views/memberRouter');


router.use('/books', booksRouter);
router.use('/members', membersRouter);


module.exports = router;