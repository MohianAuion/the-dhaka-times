import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


const FindUs = () => {
    return (
        <div>
            <h2 className='text-xl font-bold text-gray-700 mb-6 mt-10'>
                Find Us On
            </h2>

            <div className='grid grid-cols-1 gap-3'>

<button className='flex items-center gap-2 font-semibold border border-gray-200 w-full pl-6 py-3 rounded-sm hover:bg-gray-200'><FaFacebook></FaFacebook> Facebook</button>
<button className='flex items-center gap-2 font-semibold border border-gray-200 w-full pl-6 py-3 rounded-sm hover:bg-gray-200'><FaInstagram></FaInstagram> Instagram</button>
<button className='flex items-center gap-2 font-semibold border border-gray-200 w-full pl-6 py-3 rounded-sm hover:bg-gray-200'><FaTwitter></FaTwitter> Twitter</button>

            </div>
        </div>
    );
};

export default FindUs;