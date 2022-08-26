import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/css/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

// import { ToastProvider } from "react-toast-notifications";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
    
      <BrowserRouter>
        <App />
      </BrowserRouter>

  </CookiesProvider>
);
