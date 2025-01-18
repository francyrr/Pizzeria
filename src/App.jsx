import "./App.css";
//import Cart from './components/Cart'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
//import LoginPage from './components/LoginPage'
//import RegisterPage from './components/RegisterPage'
import Pizza from "./components/Pizza";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <Cart /> */}
      <Pizza />
      <Footer />
    </>
  );
}

export default App;
