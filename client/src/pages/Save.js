import React, { useState, useEffect } from 'react';
import SavedBook from "../components/SavedBook/SavedBook";
import API from "../utils/apiroutes";
import Container from "@material-ui/core/Container";
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

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

    const renderAuthors = (authors) => {
        if (Array.isArray(authors)) {
           return authors.join(", ")
        } else if (!authors) {
            return "Unknown"
        } else {
            return(authors)
        }
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            marginTop: 20,
            paddingTop: 20,
        },

        h1: {
            fontSize: 30,
            fontWeight: "bold",
        }

       
      }));

      const classes = useStyles();


    return (

        <Container>

            <Box className={classes.root}
            display="flex" 
            alignItems="center"
            justifyContent="center"
            >

                <Typography className={classes.h1}>
                    Your Saved Books
                </Typography>

            </Box>


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
                author = {renderAuthors}
                />
            })}
        </Container>
    )
}