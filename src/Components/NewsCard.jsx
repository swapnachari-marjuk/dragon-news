import React from "react";
import { FaStar, FaRegEye, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    total_view,
    rating,
    // tags,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Author & Share */}
      <div className="flex justify-between items-center p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{author.name}</h3>
            <p className="text-sm text-gray-500">
              {format(new Date(author.published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-800 flex gap-4">
          <FaShareAlt size={18} />
          <FaRegBookmark size={18} />
        </button>
      </div>

      {/* Title */}
      <div className="px-4 pb-2">
        <h2 className="font-bold text-lg text-gray-900 hover:text-primary cursor-pointer">
          {title}
        </h2>
      </div>

      {/* Image */}
      <figure>
        <img
          src={thumbnail_url}
          alt="News Thumbnail"
          className="w-full h-52 object-cover"
        />
      </figure>

      {/* Details */}
      <div className="p-4">
        <p className="text-gray-600 text-sm">
          {details.slice(0, 180)}...
          <span className="text-primary cursor-pointer font-semibold ml-1">
            Read More
          </span>
        </p>
      </div>

      {/* Footer: Rating & Views */}
      <div className="flex justify-between items-center border-t border-gray-100 p-4">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-700 ml-1 font-medium">
            {rating.number.toFixed(1)}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <FaRegEye />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
