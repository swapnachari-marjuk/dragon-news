import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center items-center pt-5">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl space-y-4 p-4">
        <h1 className="font-bold text-2xl text-center">Login your account</h1>
        <form className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <p className="text-center">Don't Have An Account ?<Link to={'/auth/register'} className="text-secondary">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
