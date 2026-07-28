import React from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import FindUs from "../FindUs/FindUs";
import QZone from "../QZone/QZone";

import bgImg from "../../assets/bg.png";

const Footer = () => {
  return (
    <footer className="bg-gray-200 mt-16">
      <div className="w-10/12 lg:w-10/12 mx-auto py-8 md:py-12">

        {/* Top Section */}
        <div className="grid grid-cols-10 gap-4 md:gap-8 items-start">

          {/* Left Side */}
          <div className="col-span-6 lg:col-span-5">

            <SocialLogin />

            <div className="mt-6 md:mt-10">
              <FindUs />
            </div>

          </div>

          {/* Right Side */}
          <div className="col-span-4 lg:col-span-5">

            <QZone />

            <div className="mt-4 md:mt-8">
              <img
                src={bgImg}
                alt="Advertisement"
                className="
                  w-full
                  h-28
                  sm:h-72
                  md:h-65
                  lg:h-50
                  xl:h-50
                  object-cover
                  rounded-xl
                "
              />
            </div>

          </div>

        </div>

        {/* Divider */}
        <hr className="border-gray-300 my-6 md:my-10" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-center">

          <p className="text-[11px] sm:text-sm md:text-base text-gray-600">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-900">
              The Dhaka Times
            </span>
            . All Rights Reserved.
          </p>

          <p className="text-[11px] sm:text-sm md:text-base text-gray-600">
            Created by{" "}
            <span className="font-bold text-black">
              Mohian Ahmed Auion
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;