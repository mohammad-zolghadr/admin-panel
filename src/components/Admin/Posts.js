import React, { useEffect, useState } from "react";

// Components
import Posts_NewContent from "./Posts_NewContent";
import Posts_ListOfPosts from "./Posts_ListOfPosts";

const Posts = () => {
  const [whatComponentMustShow, setWhatComponentMustShow] =
    useState("NewContent");

  const showComponentControl = (e) => {
    setWhatComponentMustShow(`${[e.target.name]}`);
  };

  return (
    <div className="fcenter flex-col gap-10 mcontainer bg-white rounded-xl shadow-lg mt-8 mb-16 py-8">
      <div>
        <button
          name="NewContent"
          onClick={showComponentControl}
          className="primary-btn shadow-md shadow-purple-300 font-bf md:text-sm text-xs py-2 px-6 md:mx-4 mx-2 mhover"
        >
          نوشتن مقاله جدید
        </button>
        <button
          name="ListOfPosts"
          onClick={showComponentControl}
          className="secondary-btn shadow-md shadow-purple-300 font-bf md:text-sm text-xs py-2 px-6 md:mx-4 mx-2 mhover"
        >
          لیست همه مقاله ها
        </button>
      </div>
      <div className="min-h-screen w-10/12">
        {whatComponentMustShow === "NewContent" ? (
          <Posts_NewContent />
        ) : (
          <Posts_ListOfPosts />
        )}
      </div>
    </div>
  );
};

export default Posts;
