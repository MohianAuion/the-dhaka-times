import React from 'react';
import swimImg from '../../assets/swimming.png';
import classImg from '../../assets/class.png';
import playImg from '../../assets/playground.png';
import bgImg from '../../assets/bg.png';

const QZone = () => {
    return (
        <div className='bg-gray-200 mt-10 rounded-sm'>
<h2 className='text-xl font-bold text-gray-700 mb-6 pt-8 pl-5'>Q-Zone</h2>
          <div className='flex flex-col justify-center items-center gap-5'>
             <img src={swimImg} alt="" />
           <img src={classImg} alt="" />
           <img src={playImg} alt="" />
           <img className='py-5' src={bgImg} alt="" />
          </div>
        </div>
    );
};

export default QZone;