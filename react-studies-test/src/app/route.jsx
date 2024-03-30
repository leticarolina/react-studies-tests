"use client";
import { createBrowserRouter } from "react-router-dom";
import { About } from "./About";
import Home from "./page";

export const pageRoutes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
]);
export const GET = () => {
  // Your HTTP GET method logic here
};

// export const  = () => {
//   // Your HTTP POST method logic here
// };
