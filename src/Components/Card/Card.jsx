import React from "react";
import "./Card.scss"

const Card = ({image, name, description}) => {



    return (
        <div className="card">
        <div className="card__details">
            <img className="card__img" src={image} alt="" />
            <h2 className="card__name">{name}</h2>
            <h3 className="card__description">{description}</h3>
        </div>
    </div>
    );
}
 
export default Card;