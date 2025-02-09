import React from "react";
import { useUser } from "../Context/UserContext";
import "../Profile.css";

const Profile = () => {
  const { user } = useUser();

  return (
    <div className="profile-container">
      <h2>Perfil de Usuario</h2>
      <div className="profile-text">
      <p><strong>Nombre:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
};

export default Profile;
