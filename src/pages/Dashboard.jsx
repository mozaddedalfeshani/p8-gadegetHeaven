import React, { useEffect, useContext, useState } from "react";
import { CartContext } from "../routes/root"; // Import CartContext
import tool from "../assets/tool.png";

export default function Dashboard() {
  const [wishlist, setwishlist] = useState(false);
  const { cart, setCart } = useContext(CartContext); // Use CartContext
  const [total, setTotal] = useState(0);

  useEffect(() => {
    document.title = "Dashboard | Gadget Heaven";
  }, []);

  useEffect(() => {
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    setTotal(totalPrice);
  }, [cart]);

  const purchageProducts = () => {
    setTotal(0);
    //clear the add to cart list
    setCart([]);
  };

  return (
    <>
      <div
        className={` p-5 text-white bg-[#9538E2] flex flex-col  pt-[50px] pb-[80px] relative items-center justify-center `}>
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
      </div>
      {/* there have 2 container  */}
      {/* First container for showing the  */}
      <div className="container mx-auto my-2">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h1>Cart</h1>
          </div>
          <div className="flex flex-row justify-end items-center">
            <h2>Total Cost : {total}</h2>
            <button className="btn mx-1 border border-primary  rounded-full flex items-center">
              Sort by price{" "}
              <img
                className="w-[36px] h-[36px] rounded-full mx-2 flex items-center justify-center ml-1"
                src={tool}
              />
            </button>
            <button
              className="btn mx-1 bg-[#8332C5] text-white rounded-3xl"
              onClick={purchageProducts}>
              Purchse
            </button>
          </div>
        </div>
        <div
          className={`card card-side bg-base-100 shadow-xl wishlist items-center justify-center p-4 flex ${
            wishlist ? "hidden" : "flex"
          }`}>
          <div className="card-body text-black">
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cart.map((item, index) => (
                <div key={index}>
                  <h3>{item.product_title}</h3>
                  <p>Price: ${item.price}</p>
                </div>
              ))
            )}
          </div>
        </div>
        {/* second div for showing wishlist  */}
        <div
          className={`${
            wishlist ? "flex" : "hidden"
          } card card-side bg-base-100 shadow-xl wishlist items-center justify-center p-4 flex`}>
          <div className="card-body text-black">Whislisting .....</div>
        </div>
      </div>
    </>
  );
}
