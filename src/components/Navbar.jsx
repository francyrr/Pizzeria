import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext"; 

const Navbar = () => {
  const { total } = useCart(); 

  return (
    <nav className="navbar">
      <p className="navbar-texto">Pizzería Mamma Mia!</p>
      <Link to="/">
        <button className="btn home-btn">🍕 Home</button>
      </Link>
      <Link to="/login">
        <button className="btn login-btn">🔐 Login</button>
      </Link>
      <Link to="/register">
        <button className="btn register-btn">🔐 Register</button>
      </Link>
      <Link to="/profile">
        <button className="btn profile-btn">🔒 Profile</button>
      </Link>
      <Link to="/cart">
        <button className="btn total-btn">🛒 Total: ${total.toLocaleString("es-CL")}</button>
      </Link>
    </nav>
  );
};

export default Navbar;
