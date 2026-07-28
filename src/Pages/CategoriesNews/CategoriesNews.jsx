import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../../Components/NewsCard/NewsCard";

const CategoriesNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);

  const { id } = useParams();
  const newsData = useLoaderData();

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(newsData);
    } else if (id == "1") {
      const breakingNews = newsData.filter(
        (news) => news.others.is_trending === true
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
    <div className="w-full">

      {/* Heading */}
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-5 px-2 md:px-4">
        News Feed
      </h2>

      {/* News Cards */}
      <div className="space-y-6 px-2 md:px-4">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>

    </div>
  );
};

export default CategoriesNews;