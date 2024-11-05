import React, { useEffect } from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Dell XPS 13", Price: 70, Total: 50, Rating: 85 },
  { name: "MacBook Pro", Price: 120, Total: 100, Rating: 90 },
  { name: "Wireless Earbuds", Price: 40, Total: 30, Rating: 78 },
  { name: "Apple Watch 6", Price: 60, Total: 55, Rating: 80 },
  { name: "iPhone 15", Price: 110, Total: 95, Rating: 92 },
  { name: "Wireless Charger", Price: 20, Total: 15, Rating: 74 },
];

export default function Statistics() {
  useEffect(() => {
    document.title = "Statistics | Gadget Hub";
  }, []);

  return (
    <div>
      <div className="p-5 text-white bg-[#9538E2] flex flex-col pt-[50px] pb-[80px] relative items-center justify-center ">
        <h2 className="text-[32px] font-bold">Statistics</h2>
        <p className="max-w-[796px] text-center text-[16px]">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      {/* Chart is here astart  */}
      <div className="container mx-auto my-2 p-5 bg-gray-50 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-5">Statistics</h2>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Price" fill="#A855F7" />
            <Bar dataKey="Total" fill="#7C3AED" />
            <Line type="monotone" dataKey="Rating" stroke="#DC2626" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
