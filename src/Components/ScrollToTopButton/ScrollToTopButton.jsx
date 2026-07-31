import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = ({
  onClick,
  icon,
  position = "bottom-6 right-6",
  showAfter = 300,
}) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > showAfter);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

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
    <>
      {showButton && (
        <button
          onClick={onClick || defaultScrollToTop}
          className={`
            fixed
            ${position}
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
            flex
            items-center
            justify-center
          `}
        >
          {icon || <FaArrowUp className="text-lg" />}
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;