import React from "react";
import Button from "@material-ui/core/Button";

export default function SearchedBook(props) {
    
    const newBook = {
            title: props.title,
            authors: props.authors,
            description: props.description,
            image: props.image,
            link: props.link,
            dateAdded: Date.now()
        }


    return (
        <div>
            <h2>{newBook.title}</h2>
            <p>{newBook.authors}</p>
            <p>{newBook.description}</p>
            <img src={newBook.image} alt={newBook.title}></img>
            <Button variant="contained" color="primary" href={newBook.link} target="_blank">View</Button>
            <Button variant="contained" color="primary" onClick={() => {props.save(newBook)}}>Save</Button>
        </div>

    )

}