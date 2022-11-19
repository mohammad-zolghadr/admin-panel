import React, { useState } from "react";

// Icons
import pic from "../../assets/images/profile.svg";
import trashIco from "../../assets/images/trash.svg";
import editIco from "../../assets/images/edit.svg";
import searchIco from "../../assets/images/search.svg";
import arrowIco from "../../assets/images/arrow.svg";

const PostsListOfPosts = () => {
  const tableData = [
    {
      id: 1,
      title: "عنوان یک مقاله را اینجا می نویسیم",
      image: pic,
      status: "active",
      date: "1401/08/28",
    },
    {
      id: 2,
      title: "زندگی را دوست بداریم",
      image: pic,
      status: "active",
      date: "1396/06/28",
    },
    {
      id: 3,
      title: "آموزش برنامه نویسی فرانت اند",
      image: pic,
      status: "deactive",
      date: "1401/10/22",
    },
    {
      id: 4,
      title: "یک آموزش جدید میخوام بسازم براتون",
      image: pic,
      status: "active",
      date: "1403/04/02",
    },
  ];

  const [showSortDropDown, setShowSortDropDown] = useState(false);

  return (
    <div>
      <h3 className="font-bf text-gray-700">لیست مقاله ها</h3>

      {/* Seacrh & Filter */}
      <div className="fcenter justify-between">
        <span></span>
        <div className="fcenter gap-2">
          <div className="fcenter bg-gray-100 rounded-md py-1 pr-2 pl-4 gap-1">
            <input
              type="text"
              className="border-none text-xs focus:ring-0 bg-transparent"
              placeholder="جستجو"
            />
            <img
              src={searchIco}
              className="bg-purple-600 w-6 h-6 rounded-full p-1 mhover"
            />
          </div>
          <div className="relative">
            <button
              id="dropdownDefault"
              data-dropdown-toggle="dropdown"
              className="fcenter gap-2 text-gray-600 text-xs bg-gray-100 rounded-md py-3 px-3 hover:bg-gray-50 "
              type="button"
              onClick={(e) => {
                setShowSortDropDown(!showSortDropDown);
              }}
            >
              مرتب سازی بر اساس
              <img src={arrowIco} className="w-3 h-3" />
            </button>
            {showSortDropDown && (
              <div className="absolute top-12 w-full z-10 ">
                <ul className=" bg-gray-100 rounded-b-lg shadow-lg shadow-purple-300 text-sm text-gray-700 py-2">
                  <li className="text-sm cursor-pointer hover:bg-purple-500 hover:text-white w-full px-2 py-1">
                    <span>منتشر شده ها</span>
                  </li>
                  <li className="text-sm cursor-pointer hover:bg-purple-500 hover:text-white w-full px-2 py-1">
                    <span>پیش نویس ها</span>
                  </li>
                  <li className="text-sm cursor-pointer hover:bg-purple-500 hover:text-white w-full px-2 py-1">
                    <span>جدیدترین ها</span>
                  </li>
                  <li className="text-sm cursor-pointer hover:bg-purple-500 hover:text-white w-full px-2 py-1">
                    <span>قدیمی ها</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="border border-gray-300 rounded-lg my-4">
        <table className="leading-normal w-full">
          <thead>
            <tr>
              <th
                scope="col"
                className="font-normal border-b border-gray-300 text-right text-gray-500 text-sm px-4 py-3"
              >
                عنوان
              </th>
              <th
                scope="col"
                className="font-normal border-b border-gray-300 text-center text-gray-500 text-sm px-4 py-3"
              >
                وضعیت
              </th>
              <th
                scope="col"
                className="font-normal border-b border-gray-300 text-center text-gray-500 text-sm px-4 py-3"
              >
                ایجاد شده در
              </th>
              <th
                scope="col"
                className="font-normal border-b border-gray-300 text-center text-gray-500 text-sm px-4 py-3"
              >
                اقدامات بیشتر
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((e) => {
              return (
                <tr key={e.id} className="border-b border-gray-200">
                  <td className="py-4 px-2">
                    <div className="fcenter justify-start gap-2">
                      <img
                        src={e.image}
                        className="hidden md:inline-block w-10 h-10 p-2 bg-gray-300 rounded-full"
                      ></img>
                      <p className="text-xs font-bf text-gray-500 ">
                        {e.title}
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="fcenter">
                      {e.status === "active" ? (
                        <span className="mactive">فعال</span>
                      ) : (
                        <span className="mdarft">پیش نویس</span>
                      )}
                    </div>
                  </td>
                  <td>
                    <div className="fcenter">
                      <span className="text-xs text-gray-400">{e.date}</span>
                    </div>
                  </td>
                  <td>
                    <div className="fcenter gap-2">
                      <img src={editIco} className="w-5 mhover" />
                      <img src={trashIco} className="w-5 mhover" />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="fcenter py-3">
          <div className="fcenter text-gray-400 border rounded-md overflow-hidden">
            <button className="bg-gray-200 px-2 pr-3 border-l">1</button>
            <button className="hover:bg-gray-100 px-2 border-l">2</button>
            <button className="hover:bg-gray-100 px-2 border-l">3</button>
            <button className="hover:bg-gray-100 px-2 border-l">4</button>
            <button className="hover:bg-gray-100 px-2 border-l">5</button>
            <button className="fcenter w-6 h-6 hover:bg-gray-100">
              <img src={arrowIco} className="w-3 rotate-90" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsListOfPosts;
