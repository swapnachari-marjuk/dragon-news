import React from 'react';
import SocialLogin from './AsideRight/SocialLogin';
import FindUs from './AsideRight/FindUs';
import QZone from './AsideRight/QZone';
import bgImg from '../../assets/bg.png'

const AsideRight = () => {
    return (
        <div className='space-y-5'>
           <SocialLogin/>
           <FindUs/>
           <QZone/>
           <img src={bgImg} alt="" />
        </div>
    );
};

export default AsideRight;