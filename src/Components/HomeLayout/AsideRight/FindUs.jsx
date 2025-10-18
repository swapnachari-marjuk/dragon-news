import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us On</h2>
      <div className="join join-vertical w-full bg-base-200">
        <button className="btn join-item justify-start bg-base-100 hover:bg-base-200">
          {" "}
          <FaFacebook size={18} /> Button
        </button>
        <button className="btn join-item justify-start bg-base-100 hover:bg-base-200">
          <FaTwitter size={18} /> Button
        </button>
        <button className="btn join-item justify-start bg-base-100 hover:bg-base-200">
          <FaInstagram size={18} /> Button
        </button>
      </div>
    </div>
  );
};

export default FindUs;
