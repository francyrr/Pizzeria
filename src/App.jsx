import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "../src/Pages/Home";
import LoginPage from "../src/Pages/LoginPage";
import RegisterPage from "../src/Pages/RegisterPage";
import Pizza from "../src/Pages/Pizza";
import Cart from "../src/Pages/Cart";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </>
    </AuthProvider>
  );
}

export default App;