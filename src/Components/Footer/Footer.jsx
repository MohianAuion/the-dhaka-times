import React from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import FindUs from "../FindUs/FindUs";
import QZone from "../QZone/QZone";

import bgImg from "../../assets/bg.png";

const Footer = () => {
  return (
    <footer className="bg-gray-200 mt-16">
      <div className="w-11/12 lg:w-10/12 mx-auto py-8 lg:py-12">

        {/* ================= MOBILE ================= */}
        <div className="lg:hidden">

          {/* Advertisement */}
         <div className="mb-6">
  <h2 className="text-md font-semibold text-gray-800 mb-3">
    Advertise With Us :
  </h2>

  <img
    src={bgImg}
    alt="Advertisement"
    className="w-full h-40 object-cover rounded-xl"
  />
</div>

          {/* Login + Find Us | QZone */}
          <div className="grid grid-cols-2 gap-5 items-stretch">

            {/* Left */}
            <div className="flex flex-col justify-between h-full">

              <SocialLogin />

              <div className="mt-6">
                <FindUs />
              </div>

            </div>

            {/* Right */}
            <div className="h-full">
              <QZone />
            </div>

          </div>

        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:grid grid-cols-10 gap-8 items-start">

          {/* LEFT (70%) */}
          <div className="col-span-7 flex flex-col">

            {/* Advertisement */}
            <div>
  <h2 className="text-xl font-bold text-gray-800 mb-4">
    Advertise With Us :
  </h2>

  <img
    src={bgImg}
    alt="Advertisement"
    className="w-full h-[340px] object-cover rounded-xl"
  />
</div>

            {/* Login + Find Us */}
            <div className="grid grid-cols-2 gap-10 mt-8">

              <SocialLogin />

              <FindUs />

            </div>

          </div>

          {/* RIGHT (30%) */}
          <div className="col-span-3 h-full">
            <QZone />
          </div>

        </div>

        {/* Divider */}
        <hr className="border-gray-300 my-8 lg:my-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center">

          <p className="text-xs sm:text-sm md:text-base text-gray-600">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-900">
              The Dhaka Times
            </span>
            . All Rights Reserved.
          </p>

          <p className="text-xs sm:text-sm md:text-base text-gray-600">
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