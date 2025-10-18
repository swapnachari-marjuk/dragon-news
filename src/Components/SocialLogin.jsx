import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h3 className="font-bold">Login With</h3>
      <div className="grid gap-3 mt-3">
        <button className="btn btn-outline btn-primary font-semibold">
          <FcGoogle size={24}/> Login With Google
        </button>
        <button className="btn btn-outline btn-secondary font-semibold">
          <FaGithub size={24}/> Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
