import React from "react";
import { useParams, useLoaderData } from "react-router-dom";

const Details = ({}) => {
  const { id } = useParams();
  const gadgetsData = useLoaderData();
  const gadget = gadgetsData.find(
    (gadget) => gadget.product_id.toString() === id
  );

  if (!gadget) {
    return <div>Gadget not found</div>;
  }

  return (
    <div className="p-5 text-white bg-[#9538E2] flex flex-col mb-[300px] py-[50px] relative items-center justify-center ">
      <h2 className="text-[32px] font-bold">Product Details</h2>
      <p className="max-w-[796px] text-center text-[16px]">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>

      <div className="card card-side bg-base-100 shadow-xl absolute top-[150px] items-center justify-center p-4 flex">
        <figure className="flex-grow h-full ">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Movie"
            className="w-full h-full object-cover rounded-lg"
          />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title">{gadget.product_title}</h2>
          <h3 className="p-0">Price: ${gadget.price}</h3>
          <h4 className="text-[#09080f99]">{gadget.description}</h4>

          <div
            className={`badge ${
              gadget.availability ? "badge-primary" : "badge-secondary"
            }`}>
            {gadget.availability ? "In stock" : "Not available"}
          </div>
          <div>
            <h1>Specification:</h1>
            <ol
              style={{ listStyleType: "decimal" }}
              className="text-[#09080f99] pl-4">
              {gadget.specification.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>

            <h2>Rating ⭐ </h2>

            <div className="card-actions justify-center">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>

      <p>{gadget.product_title}</p>
    </div>
  );
};

export default Details;
