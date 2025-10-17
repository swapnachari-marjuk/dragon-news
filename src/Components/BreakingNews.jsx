import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex gap-3 bg-base-200 p-3">
      <p className="bg-secondary px-3 py-2">Latest</p>

      <Marquee className="flex gap-4 font-bold" pauseOnHover={true}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        </p>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
