import React, { useEffect, useContext } from "react";
import { CartContext } from "../routes/root"; // Import CartContext

export default function Dashboard() {
  const { cart } = useContext(CartContext); // Use CartContext

  useEffect(() => {
    document.title = "Dashboard | Gadget Heaven";
  }, []);

  return (
    <div className="p-5 text-white bg-[#9538E2] flex flex-col mb-[700px] pt-[50px] pb-[80px] relative items-center justify-center ">
      <h2 className="text-[32px] font-bold">Product Details</h2>
      <p className="max-w-[796px] text-center text-[16px]">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>

      <div className="card card-side bg-base-100 shadow-xl absolute top-[200px] items-center justify-center p-4 flex"></div>
    </div>
  );
}
