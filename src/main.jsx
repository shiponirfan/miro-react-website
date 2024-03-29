import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import 'swiper/css';
import 'swiper/css/pagination';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Routes}>
      <MainLayout />
    </RouterProvider>
  </React.StrictMode>
);
