import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../../Components/NewsCard/NewsCard";

const CategoriesNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);

  const { id = "0" } = useParams();
  const newsData = useLoaderData();

  useEffect(() => {
    if (!newsData) return;

    if (id === "0") {
      setCategoryNews(newsData);
    } else if (id === "1") {
      setCategoryNews(
        newsData.filter((news) => news.others.is_trending)
      );
    } else {
      setCategoryNews(
        newsData.filter(
          (news) => String(news.category_id) === String(id)
        )
      );
    }

    // Scroll to top whenever category changes
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id, newsData]);

  return (
    <section className="w-full">
      {/* Heading */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-8">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
          News Feed
        </h2>

        <p className="text-gray-500">
          {categoryNews.length} Articles Found
        </p>
      </div>

      {categoryNews.length === 0 ? (
        <div className="bg-gray-50 border rounded-xl py-12 text-center">
          <h3 className="text-xl font-semibold">
            No News Found
          </h3>

          <p className="text-gray-500 mt-2">
            There are no articles available in this category.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {categoryNews.map((news) => (
            <NewsCard
              key={news.id}
              news={news}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default CategoriesNews;