import React from "react";
import "./Latestnews.css";
import { useLoaderData } from "react-router";

const LatestNews = () => {
  const data = useLoaderData();

  // Filter today's pick news
  const todayPicks = data.filter(
    (news) => news.others.is_today_pick
  );

  return (
    <section className="w-11/12 lg:w-10/12 mx-auto mt-3 sm:mt-4 md:mt-6">
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-gray-100 rounded-lg px-2 sm:px-3 md:px-4 py-2 md:py-3 overflow-hidden">

        {/* Latest Button */}
        <button
          className="
            btn
            bg-red-600
            text-amber-100
            h-8
            min-h-8
            px-3
            text-xs
            sm:h-9
            sm:min-h-9
            sm:px-4
            sm:text-sm
            md:btn-md
            md:text-base
            flex-shrink-0
          "
        >
          Latest
        </button>

        {/* Marquee */}
        <div className="ticker flex-1">
          <div className="ticker-track">
            {[...todayPicks, ...todayPicks].map((news, index) => (
              <span
                key={`${news.id}-${index}`}
                className="ticker-item"
              >
                📰 {news.title}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LatestNews;