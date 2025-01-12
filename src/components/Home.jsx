import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../pizzas";


const Home = () => {
  return (
    <div>
      <Header />
      <div className="card-grid">
      {pizzas.map((pizza) => (
        <CardPizza key={pizza.id} pizza={pizza} />
        
      ))}
      </div>
    </div>
  );
};

export default Home;
