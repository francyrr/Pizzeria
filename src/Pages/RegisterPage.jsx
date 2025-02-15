import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext"
import { Navigate } from "react-router-dom";

function RegisterPage() {
  const { token, register } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  if (token) return <Navigate to="/profile" />;

  async function handleRegister(event) {
    event.preventDefault();

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError("Todos los campos son obligatorios ⛔");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres ❌");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden ❌");
      return;
    }

    try {
      await register(email, password);
    } catch (err) {
      setError("Error al registrar ❌. Inténtalo de nuevo.");
    }
  }

  return (
    <div>
      <h2>¡¡ Regístrate para recibir ofertas y promociones !!</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleRegister}>
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
        Repite contraseña 🔐
        <input
          type="password"
          placeholder="Confirmar Contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="register2-btn" type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegisterPage;
