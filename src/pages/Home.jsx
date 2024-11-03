// Home.js
import React, { useEffect } from "react";
import banner from "../assets/banner.jpg";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Gadget Hub "; // Change title here
  }, []);

  return (
    <div className="bg-[#9538E2] mb-[400px] text-white flex flex-col justify-center items-center text-center py-4 h-[580px] rounded-[32px] relative">
      <h2 className="text-[56px] font-bold my-4 px-5">
        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
      </h2>
      <p className="text-[16px] py-2">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button className="btn rounded-3xl">Shop Now</button>

      {/*  */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[450px] bg-[#ffffff65] p-4 rounded-3xl shadow-lg ">
        <img
          src={banner}
          alt="VR Headset"
          className="rounded-3xl w-[600px] h-[400px]"
        />
      </div>
    </div>
    // Now Outlet will here
  
  );
};

export default Home;
