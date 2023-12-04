import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter } from "react-router-dom";
// theme prime react
import "primereact/resources/themes/lara-light-cyan/theme.css";
// skeleton loading
import "react-loading-skeleton/dist/skeleton.css";
import { BrowserRouter } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SkeletonTheme baseColor="#e2e8f0" highlightColor="#f1f5f9">
        <App />
      </SkeletonTheme>
    </BrowserRouter>
  </React.StrictMode>
);
