import React, { use, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { logInUser, loginWithGoogle } = use(AuthContext);

  const [showPass, setShowPass] = useState(false);
  const[error, setError]=useState('');

  //  handle login
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
        alert("user successfully logged in");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // handle show Password
  const handleShowPass = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

//   handle Google Login
const handleGoogleLogin=()=>{
    loginWithGoogle()
    .then(result=>{
        console.log(result.user);
        alert('user successfully logged in');
    })
    .catch(error=>{
     setError(error.message);

    })
}
  return (
    <div className="w-10/12 mx-auto mt-24 mb-24 ">
      <div>
        <div className="text-center mb-3">
          <h1 className="text-3xl font-bold">LogIn your Account</h1>
        </div>
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
          <div className="card-body ">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">

                {/* email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                  required
                />

                {/* password */}
                <div className="relative">
                  <label className="label">Password</label>
                  <input
                    type={showPass ? "text": "password"  }
                    className="input"
                    placeholder="Password"
                    name="password"
                    required
                  />
                  <button
                    onClick={handleShowPass}
                    className="absolute top-8 right-7 text-sm"
                  >
                    {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </button>
                </div>
                {/* error */}
                <h2 className="text-red-500 font-semibold">
                    {error}
                </h2>

                {/* forgot password */}
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>

            {/* go to register  */}
            <div>
              <h2 className="text-center">
                Don't have any Account? Please{' '}
                <Link
                  to="/auth/register"
                  className="text-red-500 font-semibold underline"
                >
                  Register
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

export default Login;
