import React from "react";
import { Outlet } from "react-router";

import Header from "../Components/Header/Header";
import LatestNews from "../Components/LatestNews/LatestNews";
import Navbar from "../Components/Navbar/Navbar";
import Leftbar from "../Components/Sidebar/Leftbar/Leftbar";
import Rightbar from "../Components/Sidebar/Rightbar/Rightbar";

const HomeLayout = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <Header />
        <LatestNews />
        <Navbar />
      </header>

      <main className="w-11/12 lg:w-10/12 mx-auto mt-6 lg:mt-14">

  {/* Categories on mobile */}
  <div className="block lg:hidden mb-6">
    <Leftbar />
  </div>

  <div className="grid grid-cols-10 lg:grid-cols-12 gap-4 lg:gap-8">

    {/* Desktop Categories */}
    <aside className="hidden lg:block lg:col-span-3">
      <Leftbar />
    </aside>

    {/* News Feed */}
    <section className="col-span-7 lg:col-span-6">
      <Outlet />
    </section>

    {/* Right Sidebar */}
    <aside className="col-span-3 lg:col-span-3">
      <Rightbar />
    </aside>

  </div>
</main>
</div>
  );
};

export default HomeLayout;