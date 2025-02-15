import React, { useState } from "react";
import { useCart } from "../Context/CartContext"; 
import { useAuth } from "../Context/AuthContext"; 
import "../../src/Cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, total, clearCart } = useCart(); 
  const { token } = useAuth();
  const [message, setMessage] = useState("");

  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert("🛒 El carrito está vacío. Agrega productos antes de pagar.");
      return;
    }

    const confirmPayment = window.confirm("¿Estás seguro de que deseas realizar el pago?");
    if (!confirmPayment) return;

    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      if (!response.ok) throw new Error("Error en la compra");

      setMessage("✅ Compra realizada con éxito. ¡Gracias por tu compra!");
      clearCart();
    } catch (error) {
      console.error(error);
      setMessage("❌ Hubo un error al procesar tu compra.");
    }
  };

  return (
    <div className="cart-container">
      <p className="cart-title">🛍️ Detalles del pedido:</p>
      <div>
        {cart.length > 0 ? (
          cart.map((pizza) => (
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
              <button onClick={() => removeFromCart(pizza.id)}>🗑️ Eliminar</button>
            </div>
          ))
        ) : (
          <p className="empty-cart">🛒 Tu carrito está vacío</p>
        )}
      </div>

      <h3 className="cart-total">💰 Total: ${total.toLocaleString("es-CL")}</h3>

      <button className="cart-pay-button" onClick={handleCheckout} disabled={!token}>
        💳 Pagar
      </button>

      {!token && <p style={{ color: "red" }}>🔒 Debes iniciar sesión para pagar.</p>}
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default Cart;