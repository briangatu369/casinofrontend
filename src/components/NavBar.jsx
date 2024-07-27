import React from "react";
import Logo from "../assets/logo.png";

const NavBar = ({ toggleLogin }) => {
  return (
    <div className="flex justify-between items-center  px-10 py-4 h-16">
      <div className="w-24">
        <div className="w-full">
          <img src={Logo} alt="logo" className="w-full  object-contain" />
        </div>
      </div>

      <div className="flex gap-6 ">
        <button
          onClick={toggleLogin}
          className="text-green text-sm tracking-wide font-medium"
        >
          Login
        </button>
        <button className="bg-green text-white rounded-md px-2 py-1 text-sm  font-medium ">
          <span>Register</span>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
