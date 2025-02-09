import React from "react";
import { usePizza } from "../Context/PizzaContext"; 
import CardPizza from "../components/CardPizza";
import "../../src/CardPizza.css";

const Home = () => {
  const { pizzas, loading } = usePizza(); 

  if (loading) {
    return <p>Cargando pizzas...</p>;
  }

  return (
    <div className="card-grid">
      {pizzas.map((pizza) => (
        <CardPizza key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};

export default Home;
