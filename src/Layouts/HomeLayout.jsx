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
    <>
      {/* Header */}
      <header>
        <Header />
        <LatestNews />
        <Navbar />
      </header>

      {/* Main */}
      <main className="w-11/12 lg:w-10/12 mx-auto mt-6 lg:mt-10">
        {/* Mobile */}
        <div className="block lg:hidden">
          <div className="mb-6">
            <Leftbar />
          </div>

          <section id="news-feed">
            <Outlet />
          </section>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          <aside className="lg:col-span-3 sticky top-7 h-fit">
            <div>
              <Leftbar />
            </div>
          </aside>

          <section
            id="news-feed"
            className="lg:col-span-9 min-w-0"
          >
            <Outlet />
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Button */}
      <ScrollToTopButton />
    </>
  );
};

export default HomeLayout;