import React from "react";
import "./Card.scss"

const Card = ({image, name, description, firstBrewed, ph, abv}) => {

    const shortenedText = description.substring(0, 180) + "...";



    return (
        <div className="card">
        <div className="card__details">
            <img className="card__img" src={image} alt="" />
            <h2 className="card__name">{name}</h2>
            <h3 className="card__description">{shortenedText}</h3>
            <h3 className="card__firstBrewed">First Brewed - {firstBrewed}</h3>
            <h3 className="card__ph">ph Level - {ph}</h3>
            <h3 className="card__abv">abv - {abv}%</h3>
            
        </div>
    </div>
    );
}
 
export default Card;