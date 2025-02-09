import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePizza } from "../Context/PizzaContext";
import { useCart } from "../Context/CartContext";
import "../Pizza.css";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const { fetchPizzaById } = usePizza();
  const { addToCart } = useCart();

  useEffect(() => {
    const getPizza = async () => {
      try {
        const data = await fetchPizzaById(id);
        if (data) {
          setPizza(data);
        } else {
          console.error("No se encontró la pizza");
        }
      } catch (error) {
        console.error("Error al obtener la pizza:", error);
      }
    };
    getPizza();
  }, [id, fetchPizzaById]);

  if (!pizza) {
    return <p>Cargando pizza...</p>;
  }

  return (
    <div className="pizza-container">
      <h1 className="pizza-name">{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} className="pizza-image" />
      <p className="pizza-description">{pizza.desc}</p>
      <p><strong>Ingredientes:</strong></p>
      <ul className="pizza-ingredients">
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p className="pizza-price">
        <strong>Precio:</strong> ${pizza.price.toLocaleString("es-CL")}
      </p>
      <button className="pizza-button" onClick={() => addToCart(pizza)}>Añadir al carrito</button>
    </div>
  );
};

export default Pizza;