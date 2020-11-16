const router = require("express").Router()
const Book = require("../models/Book")

// Gets all books
router.get("/api/books", (req, res) => {
    Book.find({})
    .then(dbBook => {
        res.json(dbBook)
    })
    .catch(err => res.status(422).json(err));
})

// Creates a new book
router.post("/api/books", (req, res) => {
    Book.create(req.body)
    .then(dbBook => {
        res.json(dbBook)
    })
    .catch(err => res.status(422).json(err));
})

// Deletes a book
router.delete("/api/books/:id", (req, res) => {
    Book.deleteOne({_id: req.params.id})
    .then(dbBook => {
        res.json(dbBook)
    })
    .catch(err => res.status(422).json(err));
})

module.exports = router;