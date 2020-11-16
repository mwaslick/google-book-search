import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles'
import SearchedBook from "../components/SearchedBook/SearchedBook"
import API from "../utils/apiroutes";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'

export default function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const searchFunction = (event) => {
        event.preventDefault()
        if (!searchTerm) {
            console.log("no search term")
            return
        }
        else API.searchBooks(searchTerm)
        .then (result => {
            console.log(result.data.items)
            setSearchResults(result.data.items)
        }).catch(err => {
            console.log(err)
        })
    }

    const saveFunction = (data) => {
        API.saveBook(data)
        .then (res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    const useStyles = makeStyles((theme) => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '75ch',
          },

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },

        paper: {
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
                <Box 
                className={classes.paper}
                display="flex" 
                alignItems="center"
                justifyContent="center">
                    <Typography variant="h1" className={classes.h1}>
                    Type in a search, and Google API will find you a book!

                    </Typography>

            </Box>
               
                

            <Box>

            <form className={classes.root} noValidate autoComplete="off">
                <div>
             <TextField id="standard-basic book-search" label="Search for a book" value={searchTerm} onChange= {handleChange}/>
                </div>
                <Button variant="contained" color="primary" onClick={searchFunction}>
                    Search
                </Button>
            </form>
                
            </Box>

               


            {searchResults.map(book => {
                return <SearchedBook
                key= {book.id}
                title= {book.volumeInfo.title}
                authors= {book.volumeInfo.authors}
                description = {book.volumeInfo.description}
                image= {book.volumeInfo.imageLinks.thumbnail}
                link= {book.volumeInfo.infoLink}
                save = {saveFunction}

                />
                
                })}

        </Container>
    )


}