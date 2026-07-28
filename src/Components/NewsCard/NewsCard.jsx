import React from "react";
import { format } from "date-fns";
import {
  FaBookmark,
  FaShareAlt,
  FaEye,
  FaStar,
} from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    image_url,
    details,
    rating,
    total_view,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md border border-gray-200 rounded-xl overflow-hidden">

      {/* Header */}
      <div className="flex justify-between items-center bg-gray-100 px-3 sm:px-5 py-3 sm:py-4">

        {/* Author */}
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
          />

          <div>
            <h3 className="font-bold text-sm md:text-base">
              {author.name}
            </h3>

            <p className="text-xs md:text-sm text-gray-500">
              {format(
                new Date(author.published_date),
                "yyyy-MM-dd"
              )}
            </p>
          </div>
        </div>

        {/* Icons */}
        <div className="flex gap-3 md:gap-4 text-gray-500 text-lg">
          <FaBookmark className="cursor-pointer hover:text-black transition" />
          <FaShareAlt className="cursor-pointer hover:text-black transition" />
        </div>

      </div>

      {/* Title */}
      <div className="px-3 sm:px-5 pt-4 sm:pt-5">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold leading-snug">
          {title}
        </h2>
      </div>

      {/* Image */}
      <figure className="px-3 sm:px-5 pt-4 sm:pt-5">
        <img
          src={image_url}
          alt={title}
          className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg"
        />
      </figure>

      {/* Body */}
      <div className="card-body px-3 sm:px-5 pt-4 sm:pt-5">

        <p className="text-gray-600 text-sm md:text-base leading-7">
          {details.slice(0, 180)}...
          <span className="text-orange-500 font-semibold cursor-pointer hover:underline">
            {" "}
            Read More
          </span>
        </p>

        <hr className="my-2" />

        {/* Footer */}
        <div className="flex justify-between items-center">

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-orange-400 text-sm md:text-base">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={
                    index < rating.number
                      ? ""
                      : "text-gray-300"
                  }
                />
              ))}
            </div>

            <span className="font-semibold text-sm md:text-base">
              {rating.number}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-600 text-sm md:text-base">
            <FaEye />
            <span>{total_view}</span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default NewsCard;