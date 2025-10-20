import React from 'react';
import { Link, NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
<<<<<<< HEAD
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
        <img className="w-12" src={`${user ? user.photoURL : userImg}`} alt="" />
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
=======
    return (
        <div className='flex justify-between items-center'>
            <div className='hidden md:block'></div>
            <div className='ml-25 flex gap-4 text-accent'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className='flex gap-4'>
                <img src={user} alt="" />
                <Link to={'/auth/login'} className='btn btn-primary px-5'>Login</Link>
            </div>
        </div>
    );
>>>>>>> parent of fd8217d (Implemented Sign up, sign in, sign out functionalities)
};

export default Navbar;