import React from "react";

export default function Card({name, image, weight, temperament}){
    return (
        <div>
            <p>{name}</p>
            <img src={image} alt='not found' width='200px' height='200px' />
            <p>{weight}</p>
            <p>{temperament}</p>
        </div>
    )
}