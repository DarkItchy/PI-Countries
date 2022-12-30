import React from "react";

const Card = ({img, name, continent, id}) => {
    return (
        <div>
            <img src={img} alt="Imagen no encontrada" width={"200px"} height={"250px"}/>
            <h3>{name}</h3>
            <h5>{continent}</h5>
            <h5>{id}</h5>
        </div>
    )
};

export default Card;