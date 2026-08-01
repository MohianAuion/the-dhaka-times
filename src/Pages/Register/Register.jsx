import React, { use, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";

const Register = () => {
  const { createUser, loginWithGoogle } = use(AuthContext);
  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  // Handle Register
  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        alert("Successfully created your account");
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        e.target.reset();
      });
  };

  // Show Password
  const handleShowPass = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  // Google Register
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result.user);
        alert("Successfully created your account");
        navigate("/");
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
          Create Your Account
        </h1>
      </div>

      {/* Card */}
      <div className="card bg-base-100 shadow-2xl">
        <div className="card-body p-5 sm:p-6 md:p-8">

          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">

              {/* Name */}
              <label className="label text-sm sm:text-base">
                Name
              </label>

              <input
                type="text"
                className="input input-bordered w-full text-sm sm:text-base"
                placeholder="Your name"
                name="name"
                required
              />

              {/* Photo URL */}
              <label className="label text-sm sm:text-base mt-2">
                Photo URL
              </label>

              <input
                type="text"
                className="input input-bordered w-full text-sm sm:text-base"
                placeholder="Photo URL"
                name="photo"
              />

              {/* Email */}
              <label className="label text-sm sm:text-base mt-2">
                Email
              </label>

              <input
                type="email"
                className="input input-bordered w-full text-sm sm:text-base"
                placeholder="Your email"
                name="email"
                required
              />

              {/* Password */}
              <div className="relative mt-2">
                <label className="label text-sm sm:text-base">
                  Password
                </label>

                <input
                  type={showPass ? "text" : "password"}
                  className="input input-bordered w-full pr-12 text-sm sm:text-base"
                  placeholder="Your password"
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

              {/* Register Button */}
              <button className="btn btn-neutral w-full mt-5">
                Register
              </button>

            </fieldset>
          </form>

          {/* Login Link */}
          <div className="text-center mt-5 text-sm sm:text-base">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-sky-500 font-semibold hover:underline"
            >
              Login
            </Link>
          </div>

          {/* Divider */}
          <div className="divider my-4">OR</div>

          {/* Google Register */}
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline btn-info w-full"
          >
            <FcGoogle className="text-xl" />
            Sign up with Google
          </button>

        </div>
      </div>
    </section>
  );
};

export default Register;