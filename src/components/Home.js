import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center px-16 bg-gray-100 h-screen w-full ">
      <p className="text-justify">
        در این صفحه، بخش اصلی وبسایت قرار خواهد گرفت و با کلیک بر روی دکمه زیر،
        می توانید به پنل ادمین دسترسی داشته باشید
      </p>
      <Link to="/login" className="primary-btn mhover">
        ورود به پنل ادمین
      </Link>
    </div>
  );
};

export default Home;
