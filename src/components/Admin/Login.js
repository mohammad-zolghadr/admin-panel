import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="font-nf h-screen bg-gray-100 flex flex-col gap-8 justify-center items-center">
      <h1 className="text-md font-bold bg-gray-300 p-10 rounded-lg text-gray-700">
        Login
      </h1>
      <Link
        className="bg-purple-600 text-md px-8 py-2 rounded-lg text-white hover:opacity-50 duration-300"
        to="/admin/dashboard"
      >
        ورود
      </Link>
    </div>
  );
};

export default Login;
