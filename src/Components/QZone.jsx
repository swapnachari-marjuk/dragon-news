import React from 'react';
import swimmingImg from '../assets/swimming.png'
import classImg from '../assets/class.png'
import playImg from '../assets/playground.png'

const QZone = () => {
    return (
        <div className="bg-base-200 p-5">
              <h2 className="font-bold mb-5">Q-Zone</h2>
              <div>
               <img src={swimmingImg} alt="" />
               <img src={classImg} alt="" />
               <img src={playImg} alt="" />
              </div>
            </div>
    );
};

export default QZone;