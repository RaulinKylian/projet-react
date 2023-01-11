import { useState, useEffect } from "react";
import Banner from "./Banner";
import logo from "../assets/logo-lbm.jpg";
import Cart from "./Cart";
import Footer from "./Footer";
import ShoppingList from "./ShoppingList";
import "../styles/Layout.css";

function App() {
  const savedCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <Banner>
        <img src={logo} alt="La boite à musique" className="lbm-logo" />
        <div className="title-banner">
          <h1 className="lbm-title">La boite à musique</h1>
          <h2 className="lbm-subtitle">
            La musique donne une âme à nos coeurs et des ailes à la pensée.
          </h2>
        </div>
      </Banner>
      <div className="lbm-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
