import React, { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard | Gadget Heaven";
  }, []);
  return <div></div>;
}
