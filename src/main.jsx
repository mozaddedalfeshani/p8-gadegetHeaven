import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/Root";

// // Define the Root component
// export default function Root() {
//   return (
//     <>
//       <h1>Hello, I am from Root</h1>
//     </>
//   );
// }

// Define the router with the Root component
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Use the Root component here
  },
]);

// Render the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
