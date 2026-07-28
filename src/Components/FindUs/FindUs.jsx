import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mt-6 md:mt-10">
      <h2 className="text-sm md:text-xl font-bold text-gray-700 mb-4 md:mb-6">
        Find Us On
      </h2>

      <div className="grid grid-cols-1 gap-2 md:gap-3">

        {/* Facebook */}
        <button className="flex items-center justify-center md:justify-start gap-2 border border-gray-200 w-full py-2 md:py-3 md:px-5 rounded hover:bg-gray-100 transition">
          <FaFacebook className="text-blue-600 text-base md:text-xl" />
          <span className="hidden md:inline font-semibold">
            Facebook
          </span>
        </button>

        {/* Instagram */}
        <button className="flex items-center justify-center md:justify-start gap-2 border border-gray-200 w-full py-2 md:py-3 md:px-5 rounded hover:bg-gray-100 transition">
          <FaInstagram className="text-pink-600 text-base md:text-xl" />
          <span className="hidden md:inline font-semibold">
            Instagram
          </span>
        </button>

        {/* Twitter */}
        <button className="flex items-center justify-center md:justify-start gap-2 border border-gray-200 w-full py-2 md:py-3 md:px-5 rounded hover:bg-gray-100 transition">
          <FaTwitter className="text-sky-500 text-base md:text-xl" />
          <span className="hidden md:inline font-semibold">
            Twitter
          </span>
        </button>

      </div>
    </div>
  );
};

export default FindUs;