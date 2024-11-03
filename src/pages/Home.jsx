// Home.js
import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Gadget Hub "; // Change title here
  }, []);

  return <div>Welcome to the Home Page!</div>;
};

export default Home;
