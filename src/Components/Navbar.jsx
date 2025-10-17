import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
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
                <button className='btn btn-primary px-5'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;