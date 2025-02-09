import React, { useState } from "react";
import { useUser } from "../Context/UserContext";
import { Navigate } from "react-router-dom";

function RegisterPage() {
  const { token } = useUser();

  if (token) return <Navigate to="/" />;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleRegister(event) {
    event.preventDefault(); 

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert("Todos los campos son obligatorios ⛔");
    } else if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres ❌");
    } else if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden❌");
    } else {
      alert("Registro exitoso ✅");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  }

  return (
    <div>
      <h2>¡¡ Regístrate para recibir ofertas y promociones !!</h2>
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