import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  return (
    <div className="mt-3 lg:mt-4 md:mt-6">

      {/* Title */}
      <h2 className="text-md sm:text-md md:text-xl lg:text-2xl font-semibold text-red-500 leading-snug">
        {news.title} <span className="text-black">:</span>
      </h2>

      {/* Image + Details */}
      <div className="flex flex-col lg:flex-row gap-5 md:gap-6 lg:gap-8 mt-3 lg:mt-5 mb-8 lg:mb-10">

        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={news.image_url}
            alt={news.title}
            className="w-full h-56 sm:h-72 md:h-80 lg:h-full object-cover rounded-xl"
          />
        </div>

        {/* Details */}
        <div className="w-full lg:w-1/2">
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-7 md:leading-8">
            {news.details}
          </p>
        </div>

      </div>

      {/* Go Back Button */}
      <div className="mb-6 md:mb-8">
        <Link
          to={`/categories/${news.category_id}`}
          className="
            inline-flex
            items-center
            gap-2
            text-black
            bg-white
           border
            hover:bg-red-500
            hover:text-white
            font-medium
            rounded-sm
            px-4
            py-2.5
            sm:px-5
            sm:py-3
            text-sm
            sm:text-base
            transition-all
            duration-300
          "
        >
          <FaArrowLeft className="text-xs sm:text-sm" />
          Go Back
        </Link>
      </div>

    </div>
  );
};

export default NewsDetailsCard;