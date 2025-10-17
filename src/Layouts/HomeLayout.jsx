import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router";
import BreakingNews from "../Components/BreakingNews";
import Navbar from "../Components/Navbar";
import AsideLeft from "../Components/HomeLayout/AsideLeft";
import AsideRight from "../Components/HomeLayout/AsideRight";

const HomeLayout = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <header className="space-y-4">
        <Header />
        <section>
          <BreakingNews />
        </section>
        <section>
          <Navbar />
        </section>
      </header>
      <main className="grid grid-cols-12">
        <aside className="col-span-3">
            <AsideLeft/>
        </aside>
        <section className="main col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3">
            <AsideRight/>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
