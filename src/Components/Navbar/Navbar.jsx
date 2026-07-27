import React from "react";
import profileImg from "../../assets/user.png";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto mt-5">
      <div className="flex items-center justify-between flex-wrap gap-4">

        {/* Empty Left Section */}
        <div className="flex-1"></div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-5 md:gap-8 text-sm sm:text-base font-medium">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </div>

        {/* Right Section */}
        <div className="flex flex-1 justify-end items-center gap-2 sm:gap-3">
          <img
            src={profileImg}
            alt="Profile"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full"
          />

          <button className="btn text-white bg-gray-800 btn-sm sm:btn-md">
            Login
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;