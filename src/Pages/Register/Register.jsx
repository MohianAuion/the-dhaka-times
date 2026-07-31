import React, { use, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Register = () => {

    const{createUser, loginWithGoogle}=use(AuthContext);

    const[showPass, setShowPass]=useState(false);
    const[error, setError]=useState('');

const handleRegister=e=>{
    e.preventDefault();

    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(email, password);

    createUser(email, password)
    .then(result=>{
        console.log(result.user);
        alert('successfully created your account');
        e.target.reset();
    })
    .catch(error=>{
        setError(error.message);
         e.target.reset();
    })
}

// handle show password
const handleShowPass=e=>{
    e.preventDefault();
    setShowPass(!showPass);
}

const handleGoogleLogin=()=>{
    loginWithGoogle()
    .then(result=>{
        console.log(result.user);
        alert('successfully create your account');
      
    })
    .catch(error=>{
     setError(error.message);
   

    })
}
    return (
        <div className="w-10/12 mx-auto bg-base-200 mt-24 mb-24">
  <div>
    <div className="text-center mb-5">
      <h1 className="text-3xl font-bold">Create Your Account</h1>
    </div>
    <div className="card bg-base-100 w-full mx-auto max-w-sm  shrink-0 shadow-2xl">
      <div className="card-body">

       <form onSubmit={handleRegister}>

         <fieldset className="fieldset">

            {/* Name */}
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="user name" name='name' required />
            {/* photo url */}
          <label className="label">Url</label>
          <input type="text" className="input" placeholder="photo url" name='photo' />
            {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="your email" name='email' required />
          {/* password */}
          <div className='relative'>
            <label className="label">Password</label>
          <input type={showPass? 'text': 'password'} className="input" placeholder="your password" name='password' required />
          <button onClick={handleShowPass} className='absolute top-8 right-7 text-sm'>{
            showPass? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
            }</button>
          </div>
          <h2 className='text-red-500 font-semibold'>
            {error}
         </h2>

          {/* register */}
          <button className="btn btn-neutral mt-4">Register</button>
         
        </fieldset>
       </form>

        {/* go to register  */}
            <div>
              <h2 className="text-center">
                Already have an account? Please{' '}
                <Link
                  to="/auth/register"
                  className="text-sky-500 font-semibold underline"
                >
                  LogIn
                </Link>
              </h2>
            </div>

        {/* sign in with Google */}
                   <div className="mt-2">
                       <button onClick={handleGoogleLogin} className="btn btn-outline btn-info w-full">
                      <FcGoogle className="text-lg"></FcGoogle> LogIn with Google
                   </button>
                   </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;