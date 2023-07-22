import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UseContextApi from "./customHook/useContextApi.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UseContextApi>
        <App />
      </UseContextApi>
    </BrowserRouter>
  </React.StrictMode>
);
