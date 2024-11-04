import React from "react";
import { useParams, useLoaderData } from "react-router-dom";

const Details = ({}) => {
  const { id } = useParams();
  const gadgetsData = useLoaderData();
  const gadget = gadgetsData.find((gadget) => gadget.product_id.toString() === id);

  if (!gadget) {
    return <div>Gadget not found</div>;
  }

  return (
    <div className="p-5">
      <p>{gadget.product_title}</p>
    </div>
  );
};

export default Details;
