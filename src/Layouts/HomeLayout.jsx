import React from "react";
import Header from "../Components/Header/Header";
import LatestNews from "../Components/LatestNews/LatestNews";
import Navbar from "../Components/Navbar/Navbar";
import Leftbar from "../Components/Sidebar/Leftbar/Leftbar";
import Rightbar from "../Components/Sidebar/Rightbar/Rightbar";
import { Outlet } from "react-router";
import Home from "../Pages/Home/Home";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <LatestNews></LatestNews>
          <Navbar></Navbar>
      </header>
    
      <main className="grid grid-cols-12 w-10/12 mx-auto mt-14">
        <section className="col-span-3">
          <Leftbar></Leftbar>
        </section>

        <section className="col-span-6">
            <Outlet></Outlet>
        </section>

        <section className="col-span-3">
          <Rightbar></Rightbar>
        </section>
      </main>
    </div>
  );
};

export default HomeLayout;
