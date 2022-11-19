import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Posts = () => {
  let location = useLocation().pathname.split("/");
  location = location[location.length - 1];

  return (
    <div className="fcenter flex-col gap-10 mcontainer bg-white rounded-xl shadow-lg mt-8 mb-16 py-8">
      <div>
        <Link
          name="NewContent"
          className={
            location === "new-content" ? classActiveButton : classDeactiveBtn
          }
          to="new-content"
        >
          نوشتن مقاله جدید
        </Link>
        <Link
          name="ListOfPosts"
          className={
            location === "list-of-posts" ? classActiveButton : classDeactiveBtn
          }
          to="list-of-posts"
        >
          لیست همه مقاله ها
        </Link>
      </div>
      <div className="min-h-screen w-10/12">
        <Outlet />
      </div>
    </div>
  );
};

export default Posts;

// Custom Tailwind Style
const classActiveButton =
  "primary-btn shadow-md shadow-purple-300 font-bf md:text-sm text-xs py-2 px-6 md:mx-4 mx-2 mhover";
const classDeactiveBtn =
  "secondary-btn shadow-md shadow-purple-300 font-bf md:text-sm text-xs py-2 px-6 md:mx-4 mx-2 mhover";
