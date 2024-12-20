import React, { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  function handleLogin(event) {
    event.preventDefault(); 

    if (!email.trim() || !password.trim()) {
      alert("Todos los campos son obligatorios⛔");
    } else if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres ❌");
    } else {
      alert("Inicio de sesión exitoso ✅");
      setEmail("");
      setPassword("");
    }
  }

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        Email 📧
        <input
          type="email"
          placeholder="Ingresa tu Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        Contraseña 🔐
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login2-btn"type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default LoginPage;
