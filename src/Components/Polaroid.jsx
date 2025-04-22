import React from "react";

function Polaroid({ src, caption }) {
  return (
    <div className="border-black border p-4 m-4 w-36 flex-shrink-0 bg-white">
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
