import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextProviders from "./context";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContextProviders>
      <App />
    </ContextProviders>
  </React.StrictMode>
);
