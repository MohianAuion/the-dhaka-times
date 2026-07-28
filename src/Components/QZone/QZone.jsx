import React from "react";
import swimImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playImg from "../../assets/playground.png";

const QZone = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Q-Zone
      </h2>

      <div className="grid grid-cols-3 gap-4">
        <img
          src={swimImg}
          alt="Swimming"
          className="w-full rounded-lg"
        />

        <img
          src={classImg}
          alt="Class"
          className="w-full rounded-lg"
        />

        <img
          src={playImg}
          alt="Play Ground"
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default QZone;