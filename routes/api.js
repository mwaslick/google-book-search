const router = require("express")
const Book = require("../models/Book")

// Gets all books
router.get("/api/books", (req, res) => {
    Book.find({})
    .then(result => {
        res.json(result)
    })
    .catch(err => {
        res.json(err)
    })
})

// Creates a new book
router.post("/api/books", (req, res => {
    Book.create(req.body)
    .then(newBook => {
        res.send(newBook)
    })
    .catch(err => {
        res.json(err)
    })
}))

// Deletes a book
router.delete("/api/books/:id", (req, res) => {
    Book.findByIdAndDelete({_id: req.params.id})
    .then(dbBook => {
        res.json(dbBook)
    })
    .catch (err => {
        res.json(err)
    })
})

module.exports = router;