import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mt-6 md:mt-8">
      <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-4 md:mb-5">
        Find Us On
      </h2>

      <div className="flex flex-col gap-3">

        {/* Facebook */}
        <button
          className="
            flex
            items-center
            gap-3
            w-fit
            min-w-[150px]
            border
            border-gray-200
            rounded-lg
            px-4
            py-2.5
            hover:bg-gray-100
            transition
          "
        >
          <FaFacebook className="text-blue-600 text-lg md:text-xl" />
          <span className="text-xs sm:text-sm md:text-base font-medium">
            Facebook
          </span>
        </button>

        {/* Instagram */}
        <button
          className="
            flex
            items-center
            gap-3
            w-fit
            min-w-[150px]
            border
            border-gray-200
            rounded-lg
            px-4
            py-2.5
            hover:bg-gray-100
            transition
          "
        >
          <FaInstagram className="text-pink-600 text-lg md:text-xl" />
          <span className="text-xs sm:text-sm md:text-base font-medium">
            Instagram
          </span>
        </button>

        {/* Twitter */}
        <button
          className="
            flex
            items-center
            gap-3
            w-fit
            min-w-[150px]
            border
            border-gray-200
            rounded-lg
            px-4
            py-2.5
            hover:bg-gray-100
            transition
          "
        >
          <FaTwitter className="text-sky-500 text-lg md:text-xl" />
          <span className="text-xs sm:text-sm md:text-base font-medium">
            Twitter
          </span>
        </button>

      </div>
    </div>
  );
};

export default FindUs;