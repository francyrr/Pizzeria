import React from "react";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";
import "../../src/CardPizza.css";

const CardPizza = ({ pizza }) => {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <img src={pizza.img} alt={pizza.name} className="card-img" />
      <div className="card-content">
        <h2 className="card-title">{pizza.name}</h2>
        <p className="card-price">Precio: ${pizza.price.toLocaleString("es-CL")}</p>
        <ul className="card-ingredients">
          🍕 {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}{index < pizza.ingredients.length - 1 && ","}</li>
          ))}
        </ul>
        <hr className="card-hr" />
        <div className="btn-card">
          <Link to={`/pizza/${pizza.id}`} className="ver">
            Ver más 👀
          </Link>
          <button className="añadir" onClick={() => addToCart(pizza)}>
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;