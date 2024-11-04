import React, { useEffect, useContext, useState } from "react";
import { CartContext } from "../routes/root"; // Import CartContext

export default function Dashboard() {
  const [wishlist, setwishlist] = useState(false);
  const { cart } = useContext(CartContext); // Use CartContext

  useEffect(() => {
    document.title = "Dashboard | Gadget Heaven";
  }, []);

  return (
    <div
      className={` p-5 text-white bg-[#9538E2] flex flex-col mb-[700px] pt-[50px] pb-[80px] relative items-center justify-center `}>
      <h2 className="text-[32px] font-bold">Dashboard</h2>
      <p className="max-w-[796px] text-center text-[16px]">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <div>
        <button
          className={`btn mr-2 w-[170px] rounded-2xl ${
            wishlist ? "" : "bg-[#9538E2]    "
          }`}
          onClick={() => {
            setwishlist(false);
          }}>
          Cart
        </button>
        <button
          className={`btn w-[170px] rounded-2xl ${
            wishlist ? "bg-[#9538E2] text-white" : ""
          }`}
          onClick={() => setwishlist(true)}>
          Wishlist
        </button>
      </div>
      {/* there have 2 container  */}
      {/* First container for showing the  */}
      <div
        className={`card card-side bg-base-100 shadow-xl absolute top-[200px] items-center justify-center p-4 flex ${
          wishlist ? "hidden" : "flex"
        }`}>
        <div className="card-body text-black">Hwllo</div>
      </div>
      {/* second div for showing wishlist  */}
      <div
        className={`${
          wishlist ? "flex" : "hidden"
        } card card-side bg-base-100 shadow-xl absolute top-[200px] items-center justify-center p-4 flex`}>
        <div className="card-body text-black">Whislisting .....</div>
      </div>
    </div>
  );
}
