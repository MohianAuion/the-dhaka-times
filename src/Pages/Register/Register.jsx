import React, { use, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";

const Register = () => {
  const { createUser, loginWithGoogle,updateUserProfile, emailVerify } = use(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  // Register
  const handleRegister = (e) => {
    e.preventDefault();

    setError("");

    const name=e.target.name.value;
    const photo=e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
    .then(()=>{
        return emailVerify();
    })
      .then(() => {
        return updateUserProfile(name,photo);
      })
      .then(()=>{
         alert(`✅ Registration successful!

A verification email has been sent to your email address.
Please verify your email before logging in.`);
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

  // Google Register
  const handleGoogleLogin = () => {
    setError("");

    loginWithGoogle()
      .then((result) => {
        console.log(result.user);
        alert("Successfully created your account");
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
            Create Your Account
          </h1>

        </div>

        {/* Card */}
        <div className="card bg-base-100 shadow-xl lg:shadow-2xl">
          <div className="card-body p-5 sm:p-7 lg:p-10">

            <form onSubmit={handleRegister}>
              <fieldset className="space-y-4 md:space-y-5">

                {/* Name */}
                <div>
                  <label className="label pb-1 font-medium text-sm sm:text-base">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="input input-bordered w-full h-12 text-sm sm:text-base"
                  />
                </div>

                {/* Photo URL */}
                <div>
                  <label className="label pb-1 font-medium text-sm sm:text-base">
                    Photo URL
                  </label>

                  <input
                    type="text"
                    name="photo"
                    placeholder="Enter photo URL"
                    className="input input-bordered w-full h-12 text-sm sm:text-base"
                  />
                </div>

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

                {/* Register Button */}
                <button
                  type="submit"
                  className="btn btn-neutral w-full h-12 text-base font-medium mt-2"
                >
                  Register
                </button>
              </fieldset>
            </form>

            {/* Login */}
            <div className="text-center mt-6 text-sm sm:text-base">
              Already have an account? Please{" "}
              <Link
                to="/auth/login"
                state={location.state}
                className="text-sky-500 font-semibold underline"
              >
                Login
              </Link>
            </div>

            {/* Divider */}
            <div className="divider my-4 text-xs sm:text-sm">
              OR
            </div>

            {/* Google Register */}
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline btn-info w-full h-12 text-base font-medium"
            >
              <FcGoogle className="text-xl" />
              Sign up with Google
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;