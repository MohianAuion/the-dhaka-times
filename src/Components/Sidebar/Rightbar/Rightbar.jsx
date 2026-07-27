import React from 'react';
import SocialLogin from '../../SocialLogin/SocialLogin';
import FindUs from '../../FindUs/FindUs';
import QZone from '../../QZone/QZone';

const Rightbar = () => {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default Rightbar;