const { Book } = require('../models');

const booksController = {};

booksController.getAllBooks = async (req, res) => {

    try{
        const results = await Book.findAll();
        return res.json(results);
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
}

booksController.createBook = async (req, res) => {

    try {
        let body = req.body;

        const results = await Book.create(
            {
                title: body.title,
                author: body.author,
                publiser: body.publisher,
                year: body.year
            }
        );

        return res.json(results);
    }
    catch {
        return res.status(500).send(error.message);
    }
}

booksController.updateBook = async (req, res) => {

    try{

        const results = await Book.update(
            {
                title: body.title,
                author: body.author,
                publiser: body.publisher,
                year: body.year
            },
            {
                where: {
                    id: body.id
                }
            }
        );

        return res.json(results);
    }
    catch {
        return res.status(500).send(error.message);
    }
}

booksController.deleteBook = async (req, res) => {

    try {

        const results = await Book.delete(
            {
                where: {
                    id: body.id
                }
            }
        );
        return res.json(results);
    }
    catch {
        return res.status(500).send(error.message);
    }
}

module.exports = booksController;