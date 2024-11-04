import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Nav/NavBar";
import Footer from "../pages/Footer";
export default function Root() {
  return (
    <div>
      This is root
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
