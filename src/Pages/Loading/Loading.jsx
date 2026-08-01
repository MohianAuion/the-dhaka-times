import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <span
        className="
          loading
          loading-infinity
          w-16 h-16
          sm:w-20 sm:h-20
          md:w-24 md:h-24
          lg:w-28 lg:h-28
          xl:w-30 xl:h-30
        "
      ></span>
    </div>
  );
};

export default Loading;