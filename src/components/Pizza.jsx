import React, { useEffect, useState } from "react";
import "../Pizza.css"; 

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  const id = "p001"; 
  const url = `http://localhost:5000/api/pizzas/${id}`;
  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPizza(data);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!pizza) {
    return <p>Cargando pizza...</p>;
  }

  return (
    <div className="pizza-container">
      <h1 className="pizza-name">{pizza.name}</h1>
      <img
        src={pizza.img}
        alt={pizza.name}
        className="pizza-image"
      />
      <p className="pizza-description">
         {pizza.desc}
      </p>
      <p><strong>Ingredientes:</strong></p>
      <ul className="pizza-ingredients">
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p className="pizza-price">
        <strong>Precio:</strong> ${pizza.price.toLocaleString("es-CL")}
      </p>
      <button className="pizza-button">Añadir al carrito</button>
    </div>
  );
};

export default Pizza;