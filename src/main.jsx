import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ImageSlider from "./Components/ImageSlider.jsx";
import Polaroid from "./Components/Polaroid.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ImageSlider />
  </StrictMode>
);
