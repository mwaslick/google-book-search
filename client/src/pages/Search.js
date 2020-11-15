import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles'
import SearchedBook from "../components/SearchedBook/SearchedBook"
import searchBooks from "../utils/apiroutes";
import Button from "@material-ui/core/Button"

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
        else searchBooks(searchTerm)
        .then (result => {
            console.log(result.data.items)
            setSearchResults(result.data.items)
        }).catch(err => {
            console.log(err)
        })

    }

    const useStyles = makeStyles((theme) => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '50ch',
          },
        },
      }));

    const classes = useStyles();


    return (
        <div>

            <div>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
             <TextField id="standard-basic book-search" label="Search for a book" value={searchTerm} onChange= {handleChange}/>
                </div>
            </form>
                

                <Button variant="contained" color="primary" onClick={searchFunction}>
                    Search
                </Button>

            </div>

        


            {searchResults.map(book => {
                return <SearchedBook
                key= {book.id}
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