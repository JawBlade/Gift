import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage.jsx";
import Timeline from "./Pages/Timeline.jsx";
import Letter from "./Pages/Letter.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/Gift">
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Timeline" element={<Timeline />} />
      <Route path="/Letter" element={<Letter />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  </BrowserRouter>
);
