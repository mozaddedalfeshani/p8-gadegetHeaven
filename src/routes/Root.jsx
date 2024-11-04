import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Nav/NavBar";
import Footer from "../pages/Footer";
export default function Root() {
  return (
    <div>
      This is root
      <div className="container mx-auto">
        <NavBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
