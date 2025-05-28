import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { Homepage } from "./screens/Homepage/Homepage";
// import HomePage
import { Homepage } from "./screens/HomePage/sections/HomePage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Homepage />
  </StrictMode>,
);
