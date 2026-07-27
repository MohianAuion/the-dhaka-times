import React from "react";
import "./Latestnews.css";

const news = [
  "🔴 Bangladesh wins the ODI series.",
  "📰 New education policy announced.",
  "🌍 Heavy rainfall expected this weekend.",
  "💼 Stock market closes higher today.",
  "⚽ National football team announces new squad.",
];

const LatestNews = () => {
  return (
    <section className="w-11/12 lg:w-10/12 mx-auto mt-4 md:mt-6">
      <div className="flex items-center gap-2 md:gap-4 bg-gray-100 rounded-lg px-3 md:px-4 py-2 md:py-3 overflow-hidden">

        {/* Latest Button */}
        <button className="btn btn-secondary btn-sm md:btn-md flex-shrink-0">
          Latest
        </button>

        {/* Marquee */}
        <div className="ticker">
          <div className="ticker-track">
            {[...news, ...news].map((item, index) => (
              <span key={index} className="ticker-item">
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LatestNews;