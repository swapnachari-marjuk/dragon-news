import React, { useEffect, useState } from "react";
import Header from "./Header";
import AsideRight from "./HomeLayout/AsideRight";
import { useLoaderData, useParams } from "react-router";
import NewsDetailsCard from "./NewsDetailsCard";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const newsDetails = data.find((news) => news.id == id);
    setNews(newsDetails);
  }, [data, id]);

  return (
    <div className="py-5">
      <header>
        <Header />
      </header>
      <section className="grid grid-cols-12 mt-5 max-w-7xl mx-auto">
        <section className="col-span-9 max-w-3xl mx-auto">
          <h3 className="font-bold">News Detail</h3>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <section className="col-span-3">
          <AsideRight />
        </section>
      </section>
    </div>
  );
};

export default NewsDetails;
