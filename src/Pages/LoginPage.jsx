import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext"; 
import { Navigate } from "react-router-dom";

function LoginPage() {
  const { token, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (token) return <Navigate to="/profile" />;

  async function handleLogin(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    if (!email.trim() || !password.trim()) {
      setError("❌ Todos los campos son obligatorios.");
      setLoading(false);
      return;
    }

    try {
      await login(email, password);
    } catch (err) {
      setError(err.message || "❌ Error al iniciar sesión. Verifica tus credenciales.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>🔑 Iniciar sesión</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <label>Email 📧</label>
        <input
          type="email"
          placeholder="Ingresa tu Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Contraseña 🔐</label>
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login2-btn" type="submit" disabled={loading}>
          {loading ? "Cargando..." : "Ingresar"}
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
