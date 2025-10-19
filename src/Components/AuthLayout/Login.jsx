import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../../Provider/AuthContext";

const Login = () => {
  const { logInUser, setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logInUser(email, password)
      .then((result) => {
        setUser(result.user);
        // alert("Logged in successfully.");
        e.target.reset();
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="flex justify-center items-center pt-5">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl space-y-4 p-4">
        <h1 className="font-bold text-2xl text-center">Login your account</h1>
        <form onSubmit={handleLogIn} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </fieldset>
        </form>
        <p className="text-center">
          Don't Have An Account ?
          <Link to={"/auth/register"} className="text-secondary">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
