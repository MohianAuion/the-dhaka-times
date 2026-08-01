import React, { use } from "react";
import profileImg from "../../assets/user.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {

  const{user, logOut}=use(AuthContext);

  const handleLogOut=()=>{
    logOut()
    .then(result=>{
      console.log(result.user);
      alert('user is logged out');
    })
    .catch(error=>{
      console.log(error.message);
    })
  }
  return (
    <nav className="w-11/12 lg:w-10/12 mx-auto mt-5">
      {/* Mobile */}
      <div className="flex lg:hidden items-center justify-between">

        {/* Navigation */}
        <div className="flex items-center gap-4 text-sm font-medium">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <img
            src={profileImg}
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />

          <button className="btn btn-sm bg-gray-800 text-white border-none px-4">
            Login
          </button>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex items-center justify-between">

        {/* Empty Left */}
        <div className="flex-1"></div>

        {/* Navigation */}
        <div className="flex gap-8 text-base font-medium">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </div>

        {/* Right */}
        <div className="flex flex-1 justify-end items-center gap-3">
          <img
            src={profileImg}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />

          {
            user? <Link onClick={handleLogOut} className="btn bg-gray-800 text-white">LogOut</Link> : <Link to='auth/login' className="btn bg-gray-800 text-white">LogIn</Link>
          }
        </div>

      </div>
    </nav>
  );
};

export default Navbar;