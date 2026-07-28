import React from "react";
import swimImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playImg from "../../assets/playground.png";
import bgImg from "../../assets/bg.png";

const QZone = () => {
  return (
    <div className="bg-gray-200 rounded-md mt-6 md:mt-10 overflow-hidden">
      <h2 className="text-sm md:text-xl font-bold text-gray-700 pt-4 md:pt-8 px-3 md:px-5">
        Q-Zone
      </h2>

      <div className="flex flex-col items-center gap-3 md:gap-5 px-2 md:px-4 py-3 md:py-5">
        <img
          src={swimImg}
          alt="Swimming"
          className="w-20 sm:w-24 md:w-full h-auto"
        />

        <img
          src={classImg}
          alt="Class"
          className="w-20 sm:w-24 md:w-full h-auto"
        />

        <img
          src={playImg}
          alt="Playground"
          className="w-20 sm:w-24 md:w-full h-auto"
        />
        <img
          src={bgImg}
          alt="Advertisement"
          className="w-full h-auto rounded-md"
        />
      </div>
    </div>
  );
};

export default QZone;
