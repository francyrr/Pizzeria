import React, { createContext, useContext, useState, useEffect } from "react";

const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPizzas = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      const data = await response.json();
      setPizzas(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching pizzas:", error);
      setLoading(false);
    }
  };

  const fetchPizzaById = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching pizza by ID:", error);
      return null;
    }
  };

  useEffect(() => {
    fetchPizzas(); 
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas, loading, fetchPizzaById }}>
      {children}
    </PizzaContext.Provider>
  );
};

export const usePizza = () => useContext(PizzaContext);