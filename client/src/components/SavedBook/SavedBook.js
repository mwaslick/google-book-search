import React from "react";
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

export default function SavedBook(props) {
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


    const classes = useStyles();


    return (

    <div className={classes.root}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <Paper className={classes.paper}>

            <Grid container spacing={2}>

            <Grid item xs={3}>
            <img src={props.image} alt={props.title}></img>
                </Grid>

            <Grid item xs={9}>
                <div className={classes.root}>
                <h2>{props.title}</h2>
                <p><strong>Author(s): </strong> {props.author(props.authors)} </p>
                <p>{props.description}</p>
                
                <Button variant="contained" color="primary" href={props.link} target="_blank">View</Button>
                <Button variant="contained" color="primary" onClick={() => {props.delete(props.id)}}>Delete</Button>
                </div>
            </Grid>
            </Grid>


            </Paper>
        </Grid>
    </Grid>
 </div>

)

}