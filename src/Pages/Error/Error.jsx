import { Link } from "react-router";
import { FaHome, FaNewspaper } from "react-icons/fa";

const Error = () => {
  return (
    <section className="min-h-screen bg-base-100 flex items-center justify-center px-4">
      <div className="text-center max-w-xl">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-base-200 flex items-center justify-center shadow-lg">
            <FaNewspaper className="text-5xl text-red-500" />
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-red-500 mt-5">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-base-content/70 text-base sm:text-lg mt-4 leading-8">
          Sorry! The news you're looking for doesn't exist or may have
          been moved to another page.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="btn bg-red-500 text-white hover:border-2 hover:border-black hover:bg-gray-100 hover:text-black  mt-8 px-8"
        >
          <FaHome />
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default Error;