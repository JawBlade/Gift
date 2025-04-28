import React from "react";
import logo from "/Images/Eli_Logo.png";
import { TfiAlignLeft } from "react-icons/tfi";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20 px-4 sm:px-8">
      {/* Left Side: Icon for small screens */}
      <div className="sm:hidden">
        <TfiAlignLeft className="text-2xl cursor-pointer" />
      </div>

      {/* Center: Logo (centered on small screens, left on sm and up) */}
      <div className="flex-1 flex justify-center sm:justify-start">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Center: Links for sm and up only */}
      <div className="hidden sm:flex flex-1 gap-4 text-lg flex-nowrap">
        <a className="cursor-pointer hover:underline whitespace-nowrap">
          Home Page
        </a>
        <a className="cursor-pointer hover:underline whitespace-nowrap">
          Timeline
        </a>
        <a className="cursor-pointer hover:underline whitespace-nowrap">
          Letter
        </a>
      </div>

      {/* Right: Sign In button for sm and up */}
      <div className="hidden sm:block">
        <button className="ml-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
