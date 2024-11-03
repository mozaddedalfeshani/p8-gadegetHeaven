import React, { useEffect } from "react";

export default function Statistics() {
  useEffect(() => {
    document.title = "Statistics | Gadget Hub";
  }, []);
  return <div>Statistics</div>;
}
