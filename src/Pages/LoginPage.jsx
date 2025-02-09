import React, { useState } from "react";
import { useUser } from "../Context/UserContext";
import { Navigate } from "react-router-dom";

function LoginPage() {
  const { token, login } = useUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (token) return <Navigate to="/profile" />;

  function handleLogin(event) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      alert("Todos los campos son obligatorios ⛔");
    } else if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres ❌");
    } else {
      alert(`Bienvenido, ${name}! ✅`);
      login(name, email);
      setName("");
      setEmail("");
      setPassword("");
    }
  }

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        Nombre 📝
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button className="login2-btn" type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default LoginPage;