import React, { use, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { logInUser, loginWithGoogle } = use(AuthContext);
  const navigate = useNavigate();
  const location=useLocation();
  console.log(location);

  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
        alert("User successfully logged in");
       navigate(location.state || "/", { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Show / Hide Password
  const handleShowPass = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  // Google Login
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result.user);
        alert("User successfully logged in");
        navigate(location.state || '/', {replace:true})
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <section className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto py-10 sm:py-14 md:py-20 lg:py-24">
      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Login to Your Account
        </h1>
      </div>

      {/* Card */}
      <div className="card bg-base-100 shadow-2xl">
        <div className="card-body p-5 sm:p-6 md:p-8">
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">

              {/* Email */}
              <label className="label text-sm sm:text-base">
                Email
              </label>

              <input
                type="email"
                className="input input-bordered w-full text-sm sm:text-base"
                placeholder="Enter your email"
                name="email"
                required
              />

              {/* Password */}
              <div className="relative mt-3">
                <label className="label text-sm sm:text-base">
                  Password
                </label>

                <input
                  type={showPass ? "text" : "password"}
                  className="input input-bordered w-full pr-12 text-sm sm:text-base"
                  placeholder="Enter your password"
                  name="password"
                  required
                />

                <button
                  type="button"
                  onClick={handleShowPass}
                  className="absolute right-4 top-[42px] text-gray-500 hover:text-black"
                >
                  {showPass ? (
                    <FaEyeSlash className="text-lg" />
                  ) : (
                    <FaEye className="text-lg" />
                  )}
                </button>
              </div>

              {/* Error */}
              {error && (
                <p className="text-red-500 text-sm font-medium mt-2 break-words">
                  {error}
                </p>
              )}

              {/* Forgot Password */}
              <div className="mt-2">
                <a className="link link-hover text-sm">
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <button className="btn btn-neutral w-full mt-5">
                Login
              </button>
            </fieldset>
          </form>

          {/* Register */}
          <div className="text-center mt-5 text-sm sm:text-base">
            Don't have an account?{" "}
            <Link
              to="/auth/register"
                 state={location.state}
              className="text-red-500 font-semibold hover:underline"
            >
              Register
            </Link>
          </div>

          {/* Divider */}
          <div className="divider my-4">OR</div>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline btn-info w-full"
          >
            <FcGoogle className="text-xl" />
            Login with Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;