import "./App.css";
import Cart from "../src/assets/Pages/Cart";
import Navbar from "./components/Navbar";
import Home from "../src/assets/Pages/Home";
import LoginPage from "../src/assets/Pages/LoginPage";
import RegisterPage from "../src/assets/Pages/RegisterPage";
import Pizza from "../src/assets/Pages/Pizza";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
