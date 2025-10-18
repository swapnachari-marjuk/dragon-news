import React from 'react';
import SocialLogin from '../SocialLogin';
import FindUs from '../FindUs';
import QZone from '../QZone';
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