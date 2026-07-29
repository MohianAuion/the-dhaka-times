import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    // Run once on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="
            fixed
            bottom-6
            right-6
            z-[9999]
            w-10
            h-10
            md:w-12
            md:h-12
            rounded-full
            bg-gray-300
            text-gray-700
            shadow-xl
            hover:bg-gray-400
            hover:text-white
            hover:scale-110
            transition-all
            duration-300
            cursor-pointer
          "
        >
          <FaArrowUp className="mx-auto text-lg" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;