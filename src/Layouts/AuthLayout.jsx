import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='p-10'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;