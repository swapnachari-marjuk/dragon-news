import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

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
    console.log(filteredNews);
  return <div>{filteredNews?.length} news found</div>;
};

export default CategoryNews;
