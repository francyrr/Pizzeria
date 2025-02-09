import { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true);
  const [user, setUser] = useState({ name: "Francy", email: "francy@123456.com" });

  const login = (name, email) => {
    setUser({ name, email }); 
    setToken(true);
  };


  const logout = () => {
    setUser({ name: "", email: "" });
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ token, user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

