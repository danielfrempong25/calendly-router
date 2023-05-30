import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { router } from "./Router";
import { RouterProvider } from "react-router-dom";
import "./App.css";

export default function App() {
  return <RouterProvider router={router} />;
}
