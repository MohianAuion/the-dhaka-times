import React from "react";
import { format } from "date-fns";
import {
  FaBookmark,
  FaShareAlt,
  FaEye,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    image_url,
    details,
    rating,
    total_view,
    id,
  } = news;

  return (
    <article className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden mb-8">

      {/* Header */}
      <div className="flex items-center justify-between bg-gray-50 px-4 md:px-6 py-4">

        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-11 h-11 md:w-14 md:h-14 rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold text-sm md:text-base text-gray-800">
              {author.name}
            </h3>

            <p className="text-xs md:text-sm text-gray-500">
              {format(
                new Date(author.published_date),
                "MMMM dd, yyyy"
              )}
            </p>
          </div>
        </div>

        <div className="flex gap-4 text-gray-500 text-lg">
          <button className="hover:text-red-500 transition">
            <FaBookmark />
          </button>

          <button className="hover:text-red-500 transition">
            <FaShareAlt />
          </button>
        </div>

      </div>

      {/* Title */}
      <div className="px-4 md:px-6 pt-5">

        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-snug text-gray-900 hover:text-red-600 transition cursor-pointer">
          {title}
        </h2>

      </div>

      {/* Featured Image */}
      <div className="px-4 md:px-6 py-5">

        <img
          src={image_url}
          alt={title}
          className="w-full h-56 md:h-72 lg:h-96 rounded-xl object-cover"
        />

      </div>

      {/* Body */}
      <div className="px-4 md:px-6 pb-5">

       <p className="text-gray-600 text-sm md:text-base leading-8">
  {details.slice(0, 220)}...
  {" "}
  <Link
    to={`/newsdetails/${id}`}
    className="text-red-600 font-semibold hover:underline"
    style={{ position: "relative", zIndex: 100 }}
  >
    Read More
  </Link>
</p>

        <hr className="my-6" />

        <div className="flex items-center justify-between">

          {/* Rating */}
          <div className="flex items-center gap-3">

            <div className="flex text-yellow-500">
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

            <span className="font-semibold text-gray-700">
              {rating.number}
            </span>

          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-500">
            <FaEye />
            <span>{total_view.toLocaleString()}</span>
          </div>

        </div>

      </div>

    </article>
  );
};

export default NewsCard;