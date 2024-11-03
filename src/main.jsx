import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/Root";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Statistics from "./pages/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Use the Root component here
    errorElement: <div>Hello, I'm an error</div>,
    children: [
      {
        index: true, // This makes the Home component the default child for the root path
        element: <Home />,
      },
      {
        path: "hello", // No leading slash needed
        element: <div>Hello</div>,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
    ],
  },
]);

// Render the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
