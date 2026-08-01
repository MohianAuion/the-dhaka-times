import React, { use, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { logInUser, loginWithGoogle } = use(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
        alert("User successfully logged in");
        e.target.reset();
        navigate(location.state || "/", { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Show / Hide Password
  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  // Google Login
  const handleGoogleLogin = () => {
    setError("");

    loginWithGoogle()
      .then((result) => {
        console.log(result.user);
        alert("User successfully logged in");
        navigate(location.state || "/", { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20 xl:py-24">
      <div className="max-w-md lg:max-w-lg mx-auto">

        {/* Heading */}
        <div className="text-center mb-3 lg:mb-5">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Login Your Account
          </h1>

        </div>

        {/* Card */}
        <div className="card bg-base-100 shadow-xl lg:shadow-2xl">
          <div className="card-body p-5 sm:p-7 lg:p-10">

            <form onSubmit={handleLogin}>
              <fieldset className="space-y-4 md:space-y-5">

                {/* Email */}
                <div>
                  <label className="label pb-1 font-medium text-sm sm:text-base">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="input input-bordered w-full h-12 text-sm sm:text-base"
                  />
                </div>

                {/* Password */}
                <div className="relative">
                  <label className="label pb-1 font-medium text-sm sm:text-base">
                    Password
                  </label>

                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    required
                    placeholder="Enter your password"
                    className="input input-bordered w-full h-12 pr-12 text-sm sm:text-base"
                  />

                  <button
                    type="button"
                    onClick={handleShowPass}
                    className="absolute right-4 bottom-4 text-gray-500 hover:text-black transition"
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
                  <p className="rounded-md bg-red-100 px-3 py-2 text-sm text-red-600 break-words">
                    {error}
                  </p>
                )}

                {/* Forgot Password */}
                <div>
                  <button
                    type="button"
                    className="link link-hover text-sm"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="btn btn-neutral w-full h-12 text-base font-medium"
                >
                  Login
                </button>

              </fieldset>
            </form>

            {/* Register */}
            <div className="text-center mt-6 text-sm sm:text-base">
              Don't have an account? Please{" "}
              <Link
                to="/auth/register"
                state={location.state}
                className="text-red-500 font-semibold underline"
              >
                Register
              </Link>
            </div>

            {/* Divider */}
            <div className="divider my-4 text-xs sm:text-sm">
              OR
            </div>

            {/* Google Login */}
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline btn-info w-full h-12 text-base font-medium"
            >
              <FcGoogle className="text-xl" />
              Login with Google
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;