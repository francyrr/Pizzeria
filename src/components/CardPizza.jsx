import React from "react";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card">
      <img src={img} alt={`${name}`} className="card-img" />
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <hr className="card-hr" />
        <h4>
          Ingredientes: <br />
        </h4>
        <ul className="card-ingredients">
          🍕
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient}
              {index < ingredients.length - 1 && ","}
            </li>
          ))}
        </ul>
        <hr className="card-hr" />
        <p className="card-price">Precio: ${price.toLocaleString("es-CL")}</p>
        <div className="boton-card">
          <button className="ver">Ver Más 👀</button>
          <button className="añadir"> Añadir🛒 </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
