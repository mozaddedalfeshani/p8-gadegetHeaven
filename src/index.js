import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider, WishlistProvider } from "./routes/root";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
