import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-center py-4 gap-4">
        <Link to="dashboard">داشبورد</Link>
        <Link to="posts">پست ها</Link>
        <Link to="users">کاربران</Link>
        <Link to="info">اطلاعات وب</Link>
        <Link to="/login">خروج از حساب</Link>
        <Link to="/">خانه</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
