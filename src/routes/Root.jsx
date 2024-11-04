import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Nav/NavBar";
import Footer from "../pages/Footer";

// Create a context for the cart
export const CartContext = React.createContext();

export default function Root() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, setCart }}>
      <div>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </CartContext.Provider>
  );
}
