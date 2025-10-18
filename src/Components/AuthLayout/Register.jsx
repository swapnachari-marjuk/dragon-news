import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center items-center pt-5">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl space-y-4 p-4">
        <h1 className="font-bold text-2xl text-center">
          Register your account
        </h1>
        <form className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Photo Url" />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
                
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
