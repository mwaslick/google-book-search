import React, { useEffect, useState } from 'react';
import SearchedBook from "../components/SearchedBook/SearchedBook"
import searchBooks from "../utils/apiroutes";

export default function Search() {
    const [displayedBooks, setdisplayedBooks] = useState([])

    useEffect((query) => {
        searchBooks(req.params.query)
        .then(result => {
            console.log(result)
            setdisplayedBooks(result)
        })
    })

    return (
        <div>
            {displayedBooks.map(book => {
                <SearchedBook
                title= {book.volumeInfo.title}
                authors= {book.volumeInfo.authors}
                description = {book.volumeInfo.description}
                image= {book.volumeInfo.imageLinks.thumbnail}
                link= {book.volumeInfo.infoLink}

                />
                
            })}


        </div>
    )


}