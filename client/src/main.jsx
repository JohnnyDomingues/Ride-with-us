import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ResultDestination from "./pages/ResultDestination";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/result-destination",
    element: <ResultDestination />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
