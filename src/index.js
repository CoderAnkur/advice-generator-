import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
// import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1 className="heading">Advice Generator</h1>
    <App />
  </StrictMode>
);
