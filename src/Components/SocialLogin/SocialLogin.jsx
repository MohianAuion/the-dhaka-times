import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-4 md:mb-7">
        Login With
      </h2>

      <div className="grid grid-cols-1 gap-3">

        {/* Google */}
        <button className="btn btn-outline btn-info w-full h-10 md:h-12 hover:text-white">
          <FcGoogle className="text-base md:text-xl" />

          {/* Mobile */}
          <span className="block md:hidden text-[11px]">
            Google
          </span>

          {/* Desktop */}
          <span className="hidden md:block">
            Login with Google
          </span>
        </button>

        {/* GitHub */}
        <button className="btn btn-outline w-full h-10 md:h-12">
          <FaGithub className="text-base md:text-xl" />

          {/* Mobile */}
          <span className="block md:hidden text-[11px]">
            GitHub
          </span>

          {/* Desktop */}
          <span className="hidden md:block">
            Login with GitHub
          </span>
        </button>

      </div>
    </div>
  );
};

export default SocialLogin;