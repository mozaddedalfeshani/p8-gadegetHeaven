import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/Root";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Statistics from "./pages/Statistics";
import Details from "./pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Page not found</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "details/:id",
        element: <Details />,
        loader: async () => {
          console.log("loader running");
          const response = await fetch("/src/assets/gadgets.json");
          console.log("done");
          if (!response.ok) {
            console.log("running");
            throw new Error("Failed to fetch gadgets data");
          }
          return response.json();
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
