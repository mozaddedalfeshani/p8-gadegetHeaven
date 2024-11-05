import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Nav/NavBar";
import Footer from "../pages/Footer";

// Create a context for the cart
export const CartContext = createContext();
export const WishlistContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default function Root() {
  const [wCart, setWCart] = useState([]);

  const addToWhishList = (item) => {
    setWCart((prevCart) => [...prevCart, item]);
  };

  return (
    <WishlistContext.Provider value={{ wCart, addToWhishList, setWCart }}>
      <CartProvider>
        <div>
          <NavBar />
          <Outlet />
          <Footer />
        </div>
      </CartProvider>
    </WishlistContext.Provider>
  );
}
