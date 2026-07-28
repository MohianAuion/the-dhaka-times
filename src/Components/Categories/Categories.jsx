import React, { use } from "react";
import { NavLink } from "react-router";
import "./Categories.css";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <div>
      <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6">
        All Categories
      </h2>

      <div
        id="categories"
        className="grid grid-cols-4 lg:grid-cols-1 gap-2 md:gap-3"
      >
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/categories/${category.id}`}
            className="
              border border-gray-200
              rounded-md
              text-center
              py-2 md:py-3
              px-1
              text-[10px]
              sm:text-xs
              md:text-sm
              lg:text-lg
              font-semibold
              text-gray-500
              leading-tight
              break-words
              hover:bg-gray-100
              transition-all
              duration-200
            "
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;