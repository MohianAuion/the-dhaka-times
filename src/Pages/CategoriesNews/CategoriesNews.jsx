import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../../Components/NewsCard/NewsCard";

const CategoriesNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);

  const { id = "0" } = useParams();
  const newsData = useLoaderData();

  useEffect(() => {
    if (id === "0") {
      setCategoryNews(newsData);
    } else if (id === "1") {
      const breakingNews = newsData.filter(
        (news) => news.others.is_trending
      );
      setCategoryNews(breakingNews);
    } else {
      const filteredNews = newsData.filter(
        (news) => news.category_id == id
      );
      setCategoryNews(filteredNews);
    }
  }, [newsData, id]);

  return (
    <section className="w-full">

      {/* Heading */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 pb-4 mb-8">

        <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
          News Feed
        </h2>

      </div>

      {/* No News */}
      {categoryNews.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-xl py-12 text-center">

          <h3 className="text-xl font-semibold text-gray-700">
            No News Found
          </h3>

          <p className="text-gray-500 mt-2">
            There are no articles available in this category.
          </p>

        </div>
      ) : (
        <div className="space-y-8">
          {categoryNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      )}

    </section>
  );
};

export default CategoriesNews;