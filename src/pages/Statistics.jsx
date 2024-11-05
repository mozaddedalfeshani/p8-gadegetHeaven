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
  { name: "Samsung Galaxy S22", Price: 85, Total: 80, Rating: 88 },
  { name: "Beats Studio Buds", Price: 35, Total: 25, Rating: 82 },
  { name: "Fitbit Versa 3", Price: 45, Total: 40, Rating: 83 },
  { name: "Anker PowerPort Wireless", Price: 25, Total: 20, Rating: 76 },
  { name: "Lenovo Yoga 7i", Price: 95, Total: 90, Rating: 87 },
];

export default function Statistics() {
  useEffect(() => {
    document.title = "Statistics | Gadget Hub";
  }, []);

  return (
    <div>
      <div className="p-5 text-white bg-[#9538E2] flex flex-col pt-[50px] pb-[80px] relative items-center justify-center">
        <h2 className="text-[32px] font-bold">Statistics</h2>
        <p className="max-w-[796px] text-center text-[16px]">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      {/* Chart Start */}
      <div className="container mx-auto my-2 p-5 bg-gray-50 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-5">Statistics</h2>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={data}>
            <XAxis
              dataKey="name"
              label={{ value: "Product", position: "insideBottom", dy: 10 }}
            />
            <YAxis
              label={{
                value: "Values",
                angle: -90,
                position: "insideLeft",
                dy: -10,
              }}
            />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Bar dataKey="Price" fill="#A855F7" name="Price ($)" />
            <Bar dataKey="Total" fill="#7C3AED" name="Total Sold" />
            <Line
              type="monotone"
              dataKey="Rating"
              stroke="#DC2626"
              name="Rating (%)"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
