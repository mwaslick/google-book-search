import React from "react";

export default function SearchedBook(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.authors}</p>
            <p>{props.description}</p>
            <img src={props.image} alt={props.title}></img>
            <button href={props.link}>View</button>
            <button>Save</button>

        </div>

    )

}