import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ReservaProvider } from "./Data/ReservaContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReservaProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReservaProvider>
  </StrictMode>,
);
