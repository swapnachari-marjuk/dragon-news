import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
 const {
    category_id,
    title,
    thumbnail_url,
    details,
  } = news;

  return (
    <div className="max-w-3xl mx-auto bg-base-100 shadow-md border border-gray-200 rounded-xl overflow-hidden my-5">
      {/* Image */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-80 object-cover"
        />
      </figure>

      {/* Content */}
      <div className="p-6 space-y-3">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 leading-snug">
          {title}
        </h2>

        {/* Details */}
        <p className="text-gray-600 leading-relaxed text-justify">
          {details}
        </p>

        {/* Footer Buttons */}
        <div className="mt-6 flex justify-between items-center">
          <Link
            to={`/category/${category_id}`}
            className="btn btn-sm bg-secondary text-white hover:bg-secondary/80"
          >
            ← All news in this category
          </Link>

        
        </div>
      </div>
    </div>
  );
};


export default NewsDetailsCard;