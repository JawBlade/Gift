import React from "react";
import logo from "/Images/Eli_Logo.png";
import { TfiAlignLeft } from "react-icons/tfi";
import { IoMdHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20 px-4 sm:px-8 outline-4">
      {/* Left Side: Icon for small screens */}
      <div className="sm:hidden">
        <TfiAlignLeft className="text-2xl cursor-pointer" />
      </div>

      {/* Center: Logo (centered on small screens, left on sm and up) */}
      <div className="outline-4 flex justify-center sm:justify-center items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
        <IoMdHeart className="h-10 w-10 text-red-500" />
        <IoIosHeartEmpty className="h-10 w-10 text-gray-500" />
        <div className="font-bodoni font-size-50">Eli</div>
      </div>

      {/* Center: Links for sm and up only */}
      <div className="hidden sm:flex flex-1 justify-center gap-4 text-lg flex-nowrap">
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
