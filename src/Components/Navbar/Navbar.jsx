import React, { use } from "react";
import profileImg from "../../assets/user.png";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";


const Navbar = () => {
  const { user, logOut} = use(AuthContext);

  

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("User logged out successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <nav className="w-11/12 lg:w-10/12 mx-auto mt-5">
      {/* Mobile */}
      <div className="flex lg:hidden items-center justify-between gap-3">

        {/* User Info */}
        <div className="min-w-0 flex-1">
          <p className="text-green-700 font-semibold text-xs truncate">
            {user?.email}
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <img
            src={user?.photoURL || profileImg}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover border"
          />

          {user ? (
            <button
              onClick={handleLogOut}
              className="btn btn-sm bg-gray-800 text-white hover:bg-black"
            >
              Log Out
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="btn btn-sm bg-gray-800 text-white hover:bg-black"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex items-center justify-between">

        {/* User Info */}
        <div className="flex-1 min-w-0">
          <p className="text-green-700 font-semibold text-lg truncate">
            {user?.email}
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <img
            src={user?.photoURL || profileImg}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover border"
          />

          {user ? (
            <button
              onClick={handleLogOut}
              className="btn bg-gray-800 text-white hover:bg-black"
            >
              Log Out
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="btn bg-gray-800 text-white hover:bg-black"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;