import React from 'react';
import CategoryNews from '../Components/HomeLayout/CategoryNews';
import { Navigate } from 'react-router';

const Home = () => {
    return (
        <div>
            <Navigate to={'/category/1'}/>
        </div>
    );
};

export default Home;