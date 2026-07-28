import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <header className="w-11/12 lg:w-10/12 mx-auto flex flex-col items-center text-center mt-4 sm:mt-6 md:mt-8 lg:mt-10">

      {/* Logo */}
      <img
        src={logo}
        alt="The Dhaka Times"
        className="w-44 sm:w-56 md:w-72 lg:w-[400px] h-auto"
      />

      {/* Tagline */}
      <p className="mt-1 text-[11px] sm:text-sm md:text-base lg:text-lg text-gray-500 font-medium px-2">
        Journalism Without Fear or Favour
      </p>

      {/* Date */}
      <p className="mt-1 text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800">
        {format(new Date(), "EEEE, MMMM dd, yyyy")}
      </p>

    </header>
  );
};

export default Header;