import React from "react";
import { usePizza } from "../Context/PizzaContext"; 
import { useCart } from "../Context/CartContext"; 
import "../../src/CardPizza.css";

const Home = () => {
  const { pizzas, loading } = usePizza(); 
  const { addToCart } = useCart(); 

  if (loading) {
    return <p>Cargando pizzas...</p>;
  }

  return (
    <div className="card-grid">
      {pizzas.map((pizza) => (
        <div key={pizza.id} className="card">
          <img src={pizza.img} alt={pizza.name} className="card-img" />
          <div className="card-content">
            <h2 className="card-title">{pizza.name}</h2>
            <p className="card-price">${pizza.price.toLocaleString("es-CL")}</p>
            <ul className="card-ingredients">🍕
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}{index < pizza.ingredients.length - 1 && ","}</li>
              ))}
            </ul>
            <div className="card-hr"></div>
            <div className="boton-card">
              <button onClick={() => addToCart(pizza)}>Añadir al carrito</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;