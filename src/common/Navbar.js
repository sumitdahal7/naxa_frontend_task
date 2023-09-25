import React from "react";
import logo from "../assets/naxaLogo.png";

const Navbar = () => {
  return (
    <div className="flex justify-around py-2 px-5 bg-red-400]">
      <div className="pt-2">
        <img src={logo} alt="Logo" height={200} width={120} />
      </div>
      <div className="flex pt-4">
        <p className="px-5">Services</p>
        <p className="px-5">Portfolio</p>
        <p className="px-5">Company</p>
        <p className="px-5">Events & Media</p>
        <p className="px-5">Blogs</p>
      </div>
      <div className="pt-3">
        <button className="bg-[#FFAB00] w-32 p-2 font-bold text-[#0055FF]">
          Let's talk
        </button>
      </div>
    </div>
  );
};

export default Navbar;
