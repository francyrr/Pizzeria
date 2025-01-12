import React, { useState } from "react";
import { pizzaCart } from "../pizzas";
import "../Cart.css";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const handleIncrease = (id) => {
    setCart((prevCart) =>
      prevCart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };

  const handleDecrease = (id) => {
    setCart((prevCart) =>
      prevCart.map((pizza) =>
        pizza.id === id && pizza.count > 0
          ? { ...pizza, count: pizza.count - 1 }
          : pizza
      )
    );
  };
  

  const calculateTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0).toLocaleString("es-CL");
  };

  return (
    <div className="cart-container">
      <p className="cart-title">Detalles del pedido:</p>
      <div>
        {cart.map((pizza) => (
          <div key={pizza.id} className="cart-item">
            <img src={pizza.img} alt={pizza.name} />
            <div className="cart-item-details">
              <span className="cart-item-name">{pizza.name}</span>
              <span className="cart-item-price">${pizza.price.toLocaleString("es-CL")}</span>
            </div>
            <div className="cart-item-quantity">
              <button
                className="decrease"
                onClick={() => handleDecrease(pizza.id)}
              >
                -
              </button>
              <span>{pizza.count}</span>
              <button
                className="increase"
                onClick={() => handleIncrease(pizza.id)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <h3 className="cart-total">Total: ${calculateTotal()}</h3>
      <button className="cart-pay-button" onClick={() => alert("¡Gracias por tu compra!")}>Pagar</button>
    </div>
  );
};

export default Cart;
