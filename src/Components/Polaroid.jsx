import React from "react";

function Polaroid({ src, caption }) {
  return (
    <div className="border-black border p-4 mx-18 w-36 flex-shrink-0 bg-white shadow-xl/70">
      <img
        className="mt-4 border-black border object-cover"
        src={src}
        alt={caption}
        style={{ height: "200px", width: "auto" }} // Set height, width adjusts
      />
      <div className="text-center my-4 text-sm">{caption}</div>
    </div>
  );
}

export default Polaroid;
