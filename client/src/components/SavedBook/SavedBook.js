import React from "react";
import Button from "@material-ui/core/Button";

export default function SearchedBook(props) {

    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.authors}</p>
            <p>{props.description}</p>
            <img src={props.image} alt={props.title}></img>
            <Button variant="contained" color="primary" href={props.link} target="_blank">View</Button>
            <Button variant="contained" color="primary" onClick={() => {props.delete(props.id)}}>Delete</Button>
        </div>

    )

}
