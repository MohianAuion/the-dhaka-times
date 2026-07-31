import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = ({
  onClick,
  icon,
  position = "bottom-20 right-4 md:bottom-6 md:right-6",
  showAfter = 300,
}) => {
  const [showButton, setShowButton] = useState(showAfter <= 0);

  useEffect(() => {
    if (showAfter <= 0) {
      setShowButton(true);
      return;
    }

    const handleScroll = () => {
      setShowButton(window.scrollY >= showAfter);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showAfter]);

  const defaultScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <button
        onClick={onClick || defaultScrollToTop}
        className={`
          fixed
          ${position}
          z-[99999]
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
          flex
          items-center
          justify-center
        `}
      >
        {icon || <FaArrowUp className="text-lg" />}
      </button>
    )
  );
};

export default ScrollToTopButton;