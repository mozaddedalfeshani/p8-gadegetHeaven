// Home.js
import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Gadget Hub "; // Change title here
  }, []);

  return (
    <div>
      <div>
        <h2>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="btn rounded-3xl">Shop Now</button>
      </div>
    </div>
  );
};

export default Home;
