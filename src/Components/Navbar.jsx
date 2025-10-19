import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import AuthContext from "../Provider/AuthContext";

const Navbar = () => {
  const { setUser, user, logOutUser } = use(AuthContext);
  const handleLogOut = () => {
    logOutUser()
      .then(alert("You Are Logged Out"), setUser(null))
      .catch((err) => alert(err.message));
  };
  return (
    <div className="flex justify-between items-center">
      <div className="hidden md:block"></div>
      <div className="ml-25 flex gap-4 text-accent">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="flex gap-4">
        <img src={userImg} alt="" />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-5">
            LogOut
          </button>
        ) : (
          <Link to={"/auth/login"} className="btn btn-primary px-5">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
