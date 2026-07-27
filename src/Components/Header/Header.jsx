import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <header className="w-11/12 md:w-10/12 mx-auto flex flex-col items-center text-center mt-6 md:mt-10 gap-2 md:gap-3">
      {/* Logo */}
      <img
        src={logo}
        alt="The Dhaka Times"
        className="w-52 sm:w-64 md:w-80 lg:w-[400px] h-auto"
      />

      {/* Tagline */}
      <p className="text-gray-500 font-medium text-sm sm:text-base md:text-lg px-2">
        Journalism Without Fear or Favour
      </p>

      {/* Date */}
      <p className="text-gray-800 font-semibold text-sm sm:text-base md:text-lg">
        {format(new Date(), "EEEE, MMMM dd, yyyy")}
      </p>
    </header>
  );
};

export default Header;