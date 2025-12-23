import React from "react";
import logoImg from '../assets/logo.jpg';

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      {/* Logo spinning */}
      <img
        src={logoImg}
        alt="Loading..."
        className="w-24 h-24 mb-4 animate-spin-slow"
      />

      {/* Text Animation */}
      <div className="text-gray-700 font-semibold text-lg animate-pulse">
        Loading, please wait...
      </div>
    </div>
  );
};

export default Loader;
