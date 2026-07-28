import React from "react";
import { Outlet } from "react-router";

import Header from "../Components/Header/Header";
import LatestNews from "../Components/LatestNews/LatestNews";
import Navbar from "../Components/Navbar/Navbar";
import Leftbar from "../Components/Sidebar/Leftbar/Leftbar";
import Footer from "../Components/Footer/Footer";
import ScrollToTopButton from "../Components/ScrollToTopButton/ScrollToTopButton";

const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header>
        <Header />
        <LatestNews />
        <Navbar />
      </header>

      {/* Main */}
      <main className="w-11/12 lg:w-10/12 mx-auto mt-6 lg:mt-10 flex-1">

        {/* ================= MOBILE ================= */}
        <div className="block lg:hidden">

          {/* Categories */}
          <div className="mb-6">
            <Leftbar />
          </div>

          {/* News Feed */}
          <section id="news-feed" className="relative">
            <Outlet />
          </section>

        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">

          {/* Categories */}
          <aside className="lg:col-span-3 lg:sticky lg:top-7 lg:h-fit">
            <div className="">
              <Leftbar />
            </div>
          </aside>

          {/* News Feed */}
          <section
            id="news-feed"
            className="lg:col-span-9 relative"
          >
            <Outlet />
          </section>

        </div>

      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll Button */}
      <ScrollToTopButton />
    </div>
  );
};

export default HomeLayout;