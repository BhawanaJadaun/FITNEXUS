import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#bae6fd]">
      <h1 className="text-8xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-3xl text-gray-800 mb-2 font-bold">Oops! Page Not Found</p>
      <a
        href="/"
        className="mt-4 px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default PageNotFound;
