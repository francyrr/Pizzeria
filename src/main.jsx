import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { CartProvider } from "../src/Context/CartContext.jsx";
import "./index.css";
import { PizzaProvider } from "./Context/PizzaContext.jsx";
import { UserContext, UserProvider } from "./Context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <PizzaProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </PizzaProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
