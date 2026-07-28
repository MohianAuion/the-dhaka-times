import React, { use } from "react";
import { NavLink } from "react-router";
import "./Categories.css";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <div>
      <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-5">
        All Categories
      </h2>
{/* Mobile */}
      <div
        id="categories"
        className="grid grid-cols-4 gap-2 lg:hidden"
      >
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/categories/${category.id}`}
            className={({ isActive }) => `
              ${isActive ? "border-2 border-gray-500 rounded-md bg-gray-300 text-red-500 font-bold" : "border border-gray-200 rounded-lg bg-white text-gray-600 font-medium"}
              py-2
              px-1
              text-center
              text-[11px]
              leading-tight
              hover:border-2
              hover:border-gray-500
              hover:rounded-md
              hover:bg-gray-200
              hover:text-gray-800
              hover:font-semibold
              transition-all
              duration-200
            `}
          >
            {category.name}
          </NavLink>
        ))}
      </div>


      {/* Desktop */}
      <div
        id="categories"
        className="hidden lg:flex lg:flex-col gap-3"
      >
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/categories/${category.id}`}
            className={({ isActive }) => `
              ${isActive ? "border-2 border-gray-500 rounded-md bg-gray-300 text-red-500 font-bold text-center" : "border border-gray-200 rounded-xl bg-white text-gray-700 font-semibold text-left"}
              py-3
              px-5
              text-base
              xl:text-lg
              hover:border-2
              hover:border-gray-500
              hover:rounded-md
              hover:bg-gray-200
              hover:text-gray-800
              hover:font-semibold
              transition-all
              duration-200
            `}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;