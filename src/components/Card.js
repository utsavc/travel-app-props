import React from "react";

export default function Card(props){
    console.log(props)
    return (
        <div className="container">
            <div className="img-container">
                <img src={props.imageUrl}/>
            </div>
            <div className="content">
                <span className="marker">&#9882;</span> 
                <span className="location">{props.location}</span>
                <a href="">View on Google Maps</a>
                <h2>{props.title}</h2>
                <b>{props.startDate}-{props.endDate}</b>
                <p>{props.description}</p>

            </div>
        </div>
    );

}