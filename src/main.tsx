// import 'bootstrap/dist/css/bootstrap. css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx ';
import { RouterProvider } from "react-router";
import "./index.css";
import { router } from "./routes.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
