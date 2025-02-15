import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {
    if (token) {
      fetchUserProfile(token);
    }
  }, [token]);

  const fetchUserProfile = async (token) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error("No se pudo obtener el perfil");

      const data = await response.json();
      setUser({ email: data.email });
      localStorage.setItem("user", JSON.stringify({ email: data.email }));
    } catch (error) {
      console.error(error);
      logout();
    }
  };

  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "❌ Usuario no registrado");
      }

      const { token, email: userEmail } = responseData;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify({ email: userEmail }));
      setToken(token);
      setUser({ email: userEmail });
    } catch (error) {
      console.error("❌ Usuario no registrado:", error);
      throw error;
    }
  };

  const register = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message || "Error en registro");
      }

      const { token, email: userEmail } = responseData;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify({ email: userEmail }));
      setToken(token);
      setUser({ email: userEmail });
    } catch (error) {
      console.error("❌ Error en registro:", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
