import React, { useState, useEffect } from 'react';
import SavedBook from "../components/SavedBook/SavedBook";
import API from "../utils/apiroutes";

export default function Save() {
    const [savedBooks, setSavedBooks] = useState([])

    useEffect(() => {
        API.getBooks()
            .then(result => {
                console.log(result.data)
                if (!Object.keys(result).length) {
                  setSavedBooks("No books yet!")
                } else {
                  setSavedBooks(result.data)
                }
                
            }).catch(err => console.log(err));

    }, [])


    const deleteFunction = (id) => {
        console.log(id)
        API.deleteBook(id)
        .then (result => {
            console.log(result)
            API.getBooks()
            .then (books =>
                setSavedBooks(books.data))
        })
        .catch(err => {
            console.log(err)
        })}

    

    return (
        <div>
            {savedBooks.map(book => {
                return <SavedBook
                key= {book._id}
                id = {book._id}
                title= {book.title}
                authors= {book.authors}
                description = {book.description}
                image= {book.image}
                link= {book.link}
                delete = {deleteFunction}
                />
            })}
        </div>
    )
}