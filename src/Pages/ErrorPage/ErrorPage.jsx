import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 px-4">
      
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md w-full">
        
        {/* Error Code */}
        <h1 className="text-7xl font-extrabold text-purple-600 mb-4">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-6">
          The page you're looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-md">
            Go Back Home
          </button>
        </Link>

      </div>

    </div>
  );
};

export default ErrorPage;