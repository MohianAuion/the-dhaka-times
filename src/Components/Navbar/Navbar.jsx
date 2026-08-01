import React, { use } from "react";
import profileImg from "../../assets/user.png";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import Loading from "../../Pages/Loading/Loading";

const Navbar = () => {

  const{user, logOut, loading}=use(AuthContext);

  if(loading){
    return <Loading></Loading>
  }

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
        <div className="flex items-center font-semibold text-green-700 text-sm">
          {user?.email}
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <img
            src={user?.photoURL || profileImg }
            alt="Profile"
            className="w-9 h-9 rounded-full"
          />

         {
            user? <Link onClick={handleLogOut} className="btn bg-gray-800 text-white">LogOut</Link> : <Link to='/auth/login' className="btn bg-gray-800 text-white">LogIn</Link>
          }
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex items-center justify-between">

        {/* Left */}
        <div className="flex-1 font-semibold text-green-700">
{user?.email}
        </div>
        {/* Right */}
        <div className="flex flex-1 justify-end items-center gap-3">
          <img
            src={user?.photoURL || profileImg}
            alt="Profile"
            className="w-11 h-11 rounded-full"
          />

          {
            user? <Link onClick={handleLogOut} className="btn bg-gray-800 text-white">LogOut</Link> : <Link to='/auth/login' className="btn bg-gray-800 text-white">LogIn</Link>
          }
        </div>

      </div>
    </nav>
  );
};

export default Navbar;