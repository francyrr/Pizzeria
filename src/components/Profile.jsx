import React from "react";
import { useAuth } from "../Context/AuthContext"; 
import { useNavigate } from "react-router-dom";
import "../Profile.css";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="profile-container">
      <h2> Perfil de Usuario</h2>
      <div className="profile-text">
        <p><strong>Email:</strong> {user?.email || "No disponible"}</p>
      </div>
      <button className="logout-button" onClick={handleLogout}>
        🚪 Cerrar Sesión
      </button>
    </div>
  );
};

export default Profile;
