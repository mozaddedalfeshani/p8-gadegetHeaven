import React, { useEffect, useContext, useState } from "react";
import { CartContext, WishlistContext } from "../routes/Root";
import tool from "../assets/tool.png";
import close from "../assets/close.png";
import toast, { Toaster } from "react-hot-toast";
import Modal from "../components/Modal";
import verified from "../assets/verified.png";

const showModal = () => {
  return <Modal />;
};

const notify = (message) => {
  toast(message);
  return <Toaster position="top-right" reverseOrder={false} />;
};

export default function Dashboard() {
  const [wishlist, setwishlist] = useState(false);

  const { cart, setCart } = useContext(CartContext);
  const { wCart, setWCart } = useContext(WishlistContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    document.title = "Dashboard | Gadget Heaven";
  }, []);

  useEffect(() => {
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    setTotal(totalPrice);
  }, [cart]);

  const purchageProducts = () => {
    notify("Products purchased successfully");
    setTotal(0);
    setCart([]);
  };

  const removeFromWishlist = (index) => {
    notify("Item removed from wishlist");
    setWCart((prevWCart) => prevWCart.filter((_, i) => i !== index));
  };

  const sortByPrice = () => {
    notify("Sorting by price");
    setCart((prevCart) => {
      const sortedCart = [...prevCart].sort((a, b) => b.price - a.price);
      return sortedCart;
    });
  };

  const removeFromCart = (index) => {
    notify("Item removed from cart");
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const addToCart = (item) => {
    notify("Item added to cart");
    setCart((prevCart) => [...prevCart, item]);
  };

  const [updateTotal, setUpdateTotal] = useState(0);
  return (
    <>
      {/* Khella shuru  */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box card ">
          {console.log(total, "dd")}
          <div className="card-body flex-col justify-center items-center">
            <img src={verified} className="w-20" />
            <hr style={{ color: "black" }} />
            <p className="font-bold">Payment Successfully</p>
            <p className="text-[##09080f99] text-[16px]">
              Thank's for purchasing
            </p>
            <h3 className="font-bold text-lg">Total : {updateTotal}</h3>
            <p className="py-4">Click outside to close</p>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="p-5 text-white bg-[#9538E2] flex flex-col  pt-[50px] pb-[80px] relative items-center justify-center">
        <h2 className="text-[32px] font-bold">Dashboard</h2>
        <p className="max-w-[796px] text-center text-[16px]">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div>
          <button
            className={`btn mr-2 w-[170px] rounded-2xl ${
              wishlist ? "" : "bg-[#9538E2]"
            }`}
            onClick={() => setwishlist(false)}>
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

      <div
        className={`${
          wishlist ? "hidden" : "flex flex-col items-center my-4 justify-center"
        }`}>
        <div className="container mx-auto my-2">
          <div className="flex flex-row justify-between items-center">
            <div>
              <h1>Cart</h1>
            </div>
            <div className="flex flex-row justify-end items-center">
              <h2>Total Cost : {total}</h2>
              <button
                className=" btn mx-1 border border-primary rounded-full flex items-center"
                onClick={sortByPrice}>
                Sort by price
                <img
                  className="w-[36px] h-[36px] rounded-full mx-2 flex items-center justify-center ml-1"
                  src={tool}
                />
              </button>
              <button
                className={`${
                  cart.length === 0 ? "btn-disabled" : ""
                } btn mx-1 bg-[#8332C5] text-white rounded-3xl`}
                onClick={() => {
                  console.log("Showing modal...");
                  document.getElementById("my_modal_2").showModal();
                  console.log("Calling purchaseProducts..."); // Debugging
                  console.log(total);
                  setUpdateTotal(total);
                  purchageProducts();
                }}>
                Purchase
              </button>
            </div>
          </div>
        </div>
        {/* cart items  */}
        <div
          className={`${
            wishlist ? "hidden" : "flex flex-col items-center"
          } w-full container mx-auto rounded-xl p-6`}>
          <div className="w-full max-w-3xl">
            {cart.length === 0 ? (
              <p className="text-center">Your cart is empty</p>
            ) : (
              cart.map((item, index) => (
                <div
                  key={index}
                  className="card card-side bg-base-100 shadow-xl w-full container mx-auto rounded-xl p-6 mb-4">
                  <figure>
                    <img src={item.product_image} alt={item.product_title} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{item.product_title}</h2>
                    <p>
                      <span className="font-bold">Description:</span>{" "}
                      {item.description}
                    </p>
                    <p className="font-bold text-lg">Price: ${item.price}</p>
                    <div className="card-actions justify-end">
                      <button
                        className="btn btn-primary"
                        onClick={() => removeFromCart(index)}>
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Wishlist zone */}
      <div
        className={`${
          wishlist ? "flex flex-col items-center" : "hidden"
        } bg-gray-100 p-6`}>
        <h2 className="text-2xl font-bold mb-4">WishList</h2>
        <div className="w-full max-w-3xl">
          {wCart.length === 0 ? (
            <p className="text-center">Your wishlist is empty</p>
          ) : (
            wCart.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 mb-4 flex items-center relative">
                <img
                  src={item.product_image}
                  alt={item.product_title}
                  className="w-24 h-24 object-cover rounded-lg mr-4"
                />
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold">
                    {item.product_title}
                  </h3>
                  <p className="text-gray-600">
                    <span className="font-bold">Description:</span>{" "}
                    {item.description}
                  </p>
                  <p className="font-bold text-lg">Price: ${item.price}</p>
                </div>
                <button
                  className={`${
                    item.availability
                      ? "bg-purple-500"
                      : "btn-disabled bg-grey-300"
                  } w-[169px] text-white px-4  rounded-full font-semibold ml-4 py-2`}
                  onClick={() => {
                    addToCart(item);
                    removeFromWishlist(index);
                  }}>
                  Add to Cart
                </button>
                {item.availability ? null : (
                  <p className="text-red-500">Out of stock</p>
                )}
                <button
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                  onClick={() => removeFromWishlist(index)}>
                  <img src={close} className="w-[36px]" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
