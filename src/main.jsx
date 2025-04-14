import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import NotFoundPage from "./components/pages/notFoundPages/NotFoundPage.jsx";
import OrderPage from "./components/pages/order/OrderPage.jsx";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/order", element: <OrderPage /> },
  { path: "*", element: <NotFoundPage /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
