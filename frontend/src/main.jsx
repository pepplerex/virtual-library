import React from "react";
import ReactDOM from "react-dom/client";
import routes from "./Routes.jsx";
import { RouterProvider } from "react-router-dom";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
