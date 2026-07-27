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
    <div className="card bg-base-100 shadow-md">

      {/* Header */}
      <div className="flex justify-between items-center bg-gray-100 px-5 py-4 rounded-t-xl">

        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h3 className="font-bold">{author.name}</h3>

            <p className="text-sm text-gray-500">
              {format(
                new Date(author.published_date),
                "yyyy-MM-dd"
              )}
            </p>
          </div>
        </div>

        <div className="flex gap-4 text-gray-500 text-lg">
          <FaBookmark className="cursor-pointer hover:text-black" />
          <FaShareAlt className="cursor-pointer hover:text-black" />
        </div>

      </div>

      {/* Title */}

      <div className="px-5 pt-5">
        <h2 className="text-2xl font-bold leading-snug">
          {title}
        </h2>
      </div>

      {/* Image */}

      <figure className="px-5 pt-5">
        <img
          src={image_url}
          alt={title}
          className="rounded-xl h-64 w-full object-cover"
        />
      </figure>

      {/* Details */}

      <div className="card-body pt-5">

        <p className="text-gray-600 leading-7">
          {details.slice(0, 180)}...
          <span className="text-orange-500 font-semibold cursor-pointer">
            {" "}
            Read More
          </span>
        </p>

        <hr />

        {/* Footer */}

        <div className="flex justify-between items-center">

          {/* Rating */}

          <div className="flex items-center gap-2">

            <div className="flex text-orange-400">
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

            <span className="font-semibold">
              {rating.number}
            </span>

          </div>

          {/* Views */}

          <div className="flex items-center gap-2 text-gray-600">
            <FaEye />
            <span>{total_view}</span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default NewsCard;