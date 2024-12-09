import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-gray-100">
      <h1 className="text-6xl text-red-600 font-bold">Oops!</h1>
      <p className="text-2xl text-gray-700 mt-4">Something went wrong...</p>
      <p className="mt-2 text-xl text-gray-600 max-w-md">
        We are sorry for the inconvenience. Please try again later or return to
        the{" "}
        <Link to="/" className="text-blue-500 hover:underline">
          homepage
        </Link>
        .
      </p>
      <div className="mt-6">
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
