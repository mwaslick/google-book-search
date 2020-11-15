import React from "react";

export default function SavedBook(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.authors}</p>
            <p>{props.description}</p>
            <p>{props.image}</p>
            <button href={props.link}>View</button>
            <button>Delete</button>

        </div>



    )


}