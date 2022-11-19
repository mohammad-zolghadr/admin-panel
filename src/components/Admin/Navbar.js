import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import profileIco from "../../assets/images/profile.svg";

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
            routeUrl === "dashboard" ? colorActiveClass : colorDeactiveClass
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
            routeUrl === "dashboard" ? fillActiveClass : fillDeactiveClass
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
            routeUrl === "posts" ? colorActiveClass : colorDeactiveClass
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
            routeUrl === "posts" ? fillActiveClass : fillDeactiveClass
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
            routeUrl === "users" ? colorActiveClass : colorDeactiveClass
          }
        >
          کاربران
        </p>
      ),
      url: "users",
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`${
            routeUrl === "users" ? fillActiveClass : fillDeactiveClass
          }  w-5`}
        >
          <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
        </svg>
      ),
    },
    {
      name: (
        <p
          className={
            routeUrl === "info" ? colorActiveClass : colorDeactiveClass
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
            routeUrl === "info" ? fillActiveClass : fillDeactiveClass
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
  location = location[location.length - 1];

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
          <div className="fcenter gap-x-6 ">
            {changeRoute(location).map((e, index) => {
              const isMainAdmin = data.rule === RULES.main;
              if (!isMainAdmin && index > 1) return;
              return (
                <Link
                  key={e.url}
                  to={e.url}
                  className="fcenter flex-col gap-y-2 mhover text-gray-400 font-nf text-xs"
                >
                  {e.image}
                  {e.name}
                </Link>
              );
            })}

            <Link
              to="/login"
              className="fcenter flex-col gap-y-2 mhover text-gray-400 font-nf text-xs"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-gray-400 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                />
              </svg>
              خروج
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
