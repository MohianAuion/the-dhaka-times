import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

import Header from "../../Components/Header/Header";
import NewsDetailsCard from "../../Components/NewsDetailsCard/NewsDetailsCard";
import Footer from "../../Components/Footer/Footer";
import ScrollToTopButton from "../../Components/ScrollToTopButton/ScrollToTopButton";

const NewsDetails = () => {
  const [news, setNews] = useState({});

  const { id } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    const newsData = data.find(
      (singleNews) => String(singleNews.id) === String(id)
    );

    setNews(newsData);
  }, [data, id]);

  return (
    <>
      {/* Header */}
      <header>
        <Header />
      </header>

      {/* Main */}
      <main>
        <section className="w-11/12 lg:w-10/12 mx-auto mt-8 lg:mt-14">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold">
            #News Details
          </h2>

          <NewsDetailsCard news={news} />
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll To Top Button */}
      <ScrollToTopButton showAfter={0} />
    </>
  );
};

export default NewsDetails;