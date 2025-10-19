import React from "react";
import Header from "../Components/Header";
import { Outlet, useNavigation } from "react-router";
import BreakingNews from "../Components/BreakingNews";
import Navbar from "../Components/Navbar";
import AsideLeft from "../Components/HomeLayout/AsideLeft";
import AsideRight from "../Components/HomeLayout/AsideRight";
import Loading from "../Components/Loading";

const HomeLayout = () => {
  const { state } = useNavigation();
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
      <main className="grid grid-cols-12 gap-5">
        <aside className="col-span-3 h-fit sticky top-0">
          <AsideLeft />
        </aside>
        <section className="main col-span-6">
          {state=="loading" ? <Loading /> : <Outlet />}
        </section>
        <aside className="col-span-3 h-fit sticky top-0">
          <AsideRight />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
