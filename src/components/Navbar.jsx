import React, { useState } from "react";

const Navbar = () => {
  const [token, setToken] = useState(false);
  const total = 25000;

  const toggleToken = () => {
    setToken(!token);
  };

  return (
    <nav className="navbar">
      <p className="navbar-texto">Pizzería Mamma Mia!</p>
      <button className="btn home-btn">🍕 Home</button>

      {token ? (
        <>
          <button className="btn profile-btn">🔒 Profile</button>
          <button className="btn logout-btn" onClick={toggleToken}>
            🔐 Logout
          </button>
        </>
      ) : (
        <>
          <button className="btn login-btn" onClick={toggleToken}>
            🔐 Login
          </button>
          <button className="btn register-btn">🔐 Register</button>
        </>
      )}

      <button className="btn total-btn">🛒 Total: ${total.toLocaleString('es-CL')}</button>
    </nav>
  );
};

export default Navbar;
