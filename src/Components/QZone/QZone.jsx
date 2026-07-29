import React from "react";
import swimImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playImg from "../../assets/playground.png";

const QZone = () => {
  return (
    <div className="h-full">
      <h2 className="text-sm sm:text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-5">
        Q-Zone
      </h2>

      <div className="flex flex-col gap-2 md:gap-6 h-full">
        <img
          src={swimImg}
          alt="Swimming"
          className="
            w-full
            h-28
            sm:h-24
            md:h-32
            lg:h-[180px]
            object-cover
            rounded-xl
          "
        />

        <img
          src={classImg}
          alt="Class"
          className="
            w-full
            h-28
            sm:h-24
            md:h-32
            lg:h-[180px]
            object-cover
            rounded-xl
          "
        />

        <img
          src={playImg}
          alt="Play Ground"
          className="
            w-full
            h-28
            sm:h-24
            md:h-32
            lg:h-[180px]
            object-cover
            rounded-xl
          "
        />
      </div>
    </div>
  );
};

export default QZone;