import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='text-xl font-bold text-gray-800 mb-7'>LogIn With</h2>
            <div className='grid grid-cols-1 gap-3'>

                <button className='btn w-full py-5 btn-outline btn-info hover:text-white' > <FcGoogle className='text-xl'></FcGoogle>
                LogIn with Google
            </button>
            <button className='btn w-full py-5 btn-outline'> <FaGithub className='text-xl'></FaGithub>
                Login with GitHub
            </button>
            </div>
        </div>
    );
};

export default SocialLogin;