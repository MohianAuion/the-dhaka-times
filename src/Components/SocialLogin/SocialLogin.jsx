import React, { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Context/AuthContext";

const SocialLogin = () => {
  const{loginWithGoogle, loginWithGitHub}=use(AuthContext);

 const handleLoginWithGoogle = () => {
  loginWithGoogle()
    .then((result) => {
      console.log(result.user);
      alert("Successfully logged in with Google");
    })
    .catch((error) => {
      console.log(error.message);
      alert(error.message);
    });
};

const handleLoginWithGitHub=()=>{
  loginWithGitHub()
  .then((result) => {
      console.log(result.user);
      alert("Successfully logged in with GitHub");
    })
    .catch((error) => {
      console.log(error.message);
      alert(error.message);
    });
};
  return (
    <div>
      <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-4 md:mb-5">
        Login With
      </h2>

      <div className="flex flex-col gap-3">

        {/* Google */}
        <button
        onClick={handleLoginWithGoogle}
          className="
            btn
            btn-outline
            btn-info
            w-fit
            min-w-[150px]
            h-10
            md:h-11
            hover:text-white
          "
        >
          <FcGoogle className="text-lg md:text-xl" />
          <span className="text-xs sm:text-sm md:text-base">
            Login with Google
          </span>
        </button>

        {/* GitHub */}
        <button
        onClick={handleLoginWithGitHub}
          className="
            btn
            btn-outline
            w-fit
            min-w-[150px]
            h-10
            md:h-11
          "
        >
          <FaGithub className="text-lg md:text-xl" />
          <span className="text-xs sm:text-sm md:text-base">
            Login with GitHub
          </span>
        </button>

      </div>
    </div>
  );
};

export default SocialLogin;