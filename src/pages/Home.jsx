// Home.js
import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Gadget Hub "; // Change title here
  }, []);

  return <div>Hoem</div>;
};

export default Home;
