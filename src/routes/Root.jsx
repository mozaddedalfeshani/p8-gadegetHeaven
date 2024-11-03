import React from "react";
import Nav from "../components/Nav/NavBar";
import Footer from "../pages/Footer";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Nav/NavBar";

export default function Root() {
  return (
    <div>
      <div className="container mx-auto">
        <NavBar />
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
