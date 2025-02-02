import React from "react";
import { useCart } from "../Context/CartContext"; 
import "../../src/Cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, total, clearCart } = useCart(); 

  const handlePay = () => {
    if (cart.length === 0) {
      alert("El carrito está vacío. Agrega productos antes de pagar.");
      return;
    }

    const confirmPayment = window.confirm("¿Estás seguro de que deseas realizar el pago?");
    if (confirmPayment) {
      clearCart(); 
      alert("¡Gracias por tu compra!");
    }
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
                onClick={() => {
                  if (pizza.quantity === 1) {
                    removeFromCart(pizza.id);
                  } else {
                    updateQuantity(pizza.id, pizza.quantity - 1);
                  }
                }}
              >
                -
              </button>
              <span>{pizza.quantity}</span>
              <button
                className="increase"
                onClick={() => updateQuantity(pizza.id, pizza.quantity + 1)}
              >
                +
              </button>
            </div>
            <button onClick={() => removeFromCart(pizza.id)}>Eliminar</button>
          </div>
        ))}
      </div>
      <h3 className="cart-total">Total: ${total.toLocaleString("es-CL")}</h3>
      <button className="cart-pay-button" onClick={handlePay}>Pagar</button>
    </div>
  );
};

export default Cart;
