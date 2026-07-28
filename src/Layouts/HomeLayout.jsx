import React from "react";
import { Outlet } from "react-router";

import Header from "../Components/Header/Header";
import LatestNews from "../Components/LatestNews/LatestNews";
import Navbar from "../Components/Navbar/Navbar";
import Leftbar from "../Components/Sidebar/Leftbar/Leftbar";
import Rightbar from "../Components/Sidebar/Rightbar/Rightbar";
import ScrollToTopButton from "../Components/ScrollToTopButton/ScrollToTopButton";

const HomeLayout = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <Header />
        <LatestNews />
        <Navbar />
      </header>

      {/* Main */}
      <main className="w-11/12 lg:w-10/12 mx-auto mt-6 lg:mt-14">
        {/* Categories (Mobile Only) */}
        <div className="block lg:hidden mb-6">
          <Leftbar />
        </div>

        <div className="grid grid-cols-10 lg:grid-cols-12 gap-4 lg:gap-8">
          {/* Left Sidebar (Desktop Only) */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-6 h-fit">
              <Leftbar />
            </div>
          </aside>

          {/* News Feed */}
          <section
            id="news-feed"
            className="col-span-7 lg:col-span-6 relative"
          >
            <Outlet />

            {/* Floating Scroll Button — scoped to this column, floats while scrolling within it */}
            <div className="sticky bottom-16 lg:bottom-6 flex justify-start pointer-events-none">
              <div className="pointer-events-auto pl-4 lg:pl-6">
                <ScrollToTopButton className="sticky bottom-16 lg:bottom-6" />
              </div>
            </div>
          </section>

          {/* Right Sidebar */}
          <aside className="col-span-3 lg:col-span-3 min-h-0">
            <div
              className="
                sticky
                top-6
                h-[calc(100dvh-2rem)]
                max-h-[calc(100dvh-2rem)]
                overflow-y-scroll
                overscroll-contain
                pr-2
                scrollbar-thin
                min-h-0
                [-webkit-overflow-scrolling:touch]
              "
            >
              <Rightbar />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default HomeLayout;