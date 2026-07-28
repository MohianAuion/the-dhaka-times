import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = ({ className = "fixed bottom-6 right-6" }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNewsFeed = () => {
    const newsFeed = document.getElementById("news-feed");

    if (newsFeed) {
      newsFeed.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToNewsFeed}
          className={`${className} z-50 w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-400 hover:text-white text-gray-500 shadow-xl transition-all duration-300 hover:scale-110`}
        >
          <FaArrowUp className="mx-auto" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;