import React from "react";
import "../CardPizza.css";

const CardPizza = ({ pizza }) => {
  return (
    
    <div className="card">
      <img src={pizza.img} alt={pizza.name} className="card-img" />
      <div className="card-content">
        <h2 className="card-title">{pizza.name}</h2>
        <p className="card-price">Precio: ${pizza.price.toLocaleString("es-CL")}</p>
        <ul className="card-ingredients">
        🍕
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient} {index < pizza.ingredients.length - 1 && ","}</li>
          ))}
        </ul>
        <hr className="card-hr" />
        <div className="boton-card">
          <button className="ver">Ver más 👀</button>
          <button className="añadir">Añadir 🛒</button>
        </div>
      </div>
    </div>
    
  );
};

export default CardPizza;
