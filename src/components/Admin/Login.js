import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [inputValue, setInputValue] = useState({ username: "", password: "" });
  const inputHandler = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  const loginHandler = (e) => {
    e.preventDefault();
    // Loading - axios
  };
  return (
    <div className="font-nf h-screen bg-gray-100 fcenter flex-col gap-8 ">
      <form
        onSubmit={loginHandler}
        className="responsive-center fcenter flex-col gap-6 bg-white rounded-lg shadow-lg"
      >
        <h3 className="font-bf text-gray-700">ورود به پنل ادمین</h3>
        <input
          name="username"
          type="text"
          value={inputValue.username}
          className="minput"
          placeholder="نام کاربری"
          onChange={inputHandler}
        />
        <input
          name="password"
          type="password"
          value={inputValue.password}
          className="minput"
          placeholder="کلمه عبور"
          onChange={inputHandler}
        />
        <Link
          type="submit"
          className="fcenter primary-btn mhover rounded-full w-1/2"
          to="/admin/dashboard"
        >
          ورود
        </Link>
      </form>
      <p className="text-gray-500 text-xs">
        ساخته شده توسط
        <a
          href="https://mohammadzolghadr.ir"
          target="_blank"
          className="inline-block text-purple-500 mx-1 font-bf"
        >
          محمد ذوالقدر
        </a>
      </p>
    </div>
  );
};

export default Login;
