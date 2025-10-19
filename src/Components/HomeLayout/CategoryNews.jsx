import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [filteredNews, setFilteredNews] = useState([]);
  useEffect(() => {
    if (id == "0") {
      setFilteredNews(data);
    } else if (id == "1") {
      const filteredData = data?.filter(
        (news) => news.others.is_today_pick == id
      );
      setFilteredNews(filteredData);
    } else {
      const filteredData = data?.filter((news) => news.category_id == id);
      setFilteredNews(filteredData);
    }
  }, [id, data]);
  return (
    <div >
      <h2 className="font-bold">Total {filteredNews?.length} news found</h2>
      <div className="space-y-5 pt-5">
        {filteredNews?.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
