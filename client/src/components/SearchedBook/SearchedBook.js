import React from "react";
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

export default function SearchedBook(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
        },
      }));
    
    const newBook = {
            title: props.title,
            authors: props.authors,
            description: props.description,
            image: props.image,
            link: props.link,
            dateAdded: Date.now()
        }

    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <Paper className={classes.paper}>

                <Grid container spacing={2}>

                <Grid item xs={3}>
                <img src={newBook.image} alt={newBook.title}></img>
                    </Grid>

                <Grid item xs={9}>
                    <div className={classes.root}>
                    <h2>{newBook.title}</h2>
                    <p>{newBook.authors}</p>
                    <p>{newBook.description}</p>
                    
                    <Button variant="contained" color="primary" href={newBook.link} target="_blank">View</Button>
                    <Button variant="contained" color="primary" onClick={() => {props.save(newBook)}}>Save</Button>
                    </div>
                </Grid>
                </Grid>

  
                </Paper>
            </Grid>
        </Grid>
     </div>

    )

}