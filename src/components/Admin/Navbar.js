import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

// Icons
import profileIco from "../../assets/images/profile.svg";
import arrowIco from "../../assets/images/arrow.svg";

const RULES = { main: "MAIN_ADMIN", test: "TEST_ADMIN" };
const changeRoute = (routeUrl) => {
  const fillActiveClass = "fill-purple-500";
  const fillDeactiveClass = "fill-gray-400";
  const colorActiveClass = "text-purple-500";
  const colorDeactiveClass = "text-gray-400";
  const data = [
    {
      name: (
        <p
          className={
            routeUrl.includes("dashboard")
              ? colorActiveClass
              : colorDeactiveClass
          }
        >
          داشبورد
        </p>
      ),
      url: "dashboard",
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`${
            routeUrl.includes("dashboard") ? fillActiveClass : fillDeactiveClass
          }  w-5`}
        >
          <path d="M6 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 111.5 0v7.5A.75.75 0 016 12zM18 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0118 12zM6.75 20.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM18.75 18.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 011.5 0zM12.75 5.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM12 21a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0112 21zM3.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0zM12 11.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM15.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0z" />
        </svg>
      ),
    },
    {
      name: (
        <p
          className={
            routeUrl.includes("posts") ? colorActiveClass : colorDeactiveClass
          }
        >
          مقاله ها
        </p>
      ),
      url: "posts",
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`${
            routeUrl.includes("posts") ? fillActiveClass : fillDeactiveClass
          }  w-5`}
        >
          <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
          <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
        </svg>
      ),
    },
    {
      name: (
        <p
          className={
            routeUrl.includes("info") ? colorActiveClass : colorDeactiveClass
          }
        >
          اطلاعات وب
        </p>
      ),
      url: "info",
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`${
            routeUrl.includes("info") ? fillActiveClass : fillDeactiveClass
          }  w-5`}
        >
          <path
            fillRule="evenodd"
            d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm4.125 3a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm-3.873 8.703a4.126 4.126 0 017.746 0 .75.75 0 01-.351.92 7.47 7.47 0 01-3.522.877 7.47 7.47 0 01-3.522-.877.75.75 0 01-.351-.92zM15 8.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15zM14.25 12a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];
  return data;
};

const Navbar = () => {
  // it must get from server
  const data = { name: "محمد ذوالقدر", rule: RULES.main };
  let location = useLocation().pathname.split("/");
  // location = location[location.length - 1];

  return (
    <div className="bg-gray-100 p-1">
      <div className="fcenter py-4 px-4 gap-4 bg-white mcontainer my-6 rounded-xl shadow-lg">
        <div className="fbetween w-full px-6">
          <div className="fcenter gap-x-4 ">
            <span className="fcenter w-14 h-14 p-2 bg-gray-400 rounded-full">
              <img src={profileIco} />
            </span>
            <div className="fstart items-start flex-col  gap-y-1">
              <p className="font-bold text-sm text-gray-600">{data.name}</p>
              <span className="inline-block mtag">
                {data.rule === RULES.main ? "مدیر اصلی" : "بیننده"}
              </span>
            </div>
          </div>
          <nav className="">
            <div className="fcenter gap-3 px-3 py-1 rounded-md bg-gray-100 mhover">
              <span className="text-gray-500 font-bf text-sm">فهرست</span>
              <img className="w-4 " src={arrowIco} />
            </div>
          </nav>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
