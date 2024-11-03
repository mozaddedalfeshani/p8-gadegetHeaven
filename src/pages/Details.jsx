import React from "react";
import { useParams } from "react-router-dom";
import gadgetsData from "../data/gadgets.json";

const Details = () => {
  const { id } = useParams();
  const gadget = gadgetsData.find(gadget => gadget.product_id === id);

  if (!gadget) {
    return <div>Gadget not found</div>;
  }

  return (
    <div className="p-5">
      <h2 className="text-[40px] font-bold mb-4">{gadget.product_title}</h2>
      <img src={gadget.product_image} alt={gadget.product_title} className="w-full h-96 object-cover mb-4" />
      <p className="text-[20px] mb-2">${gadget.price}</p>
      <p className="text-[16px] mb-4">{gadget.description}</p>
      <button className="btn">Add to Cart</button>
    </div>
  );
};

export default Details;
