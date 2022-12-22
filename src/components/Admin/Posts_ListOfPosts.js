import React, { useEffect, useState } from "react";

// Icons
import trashIco from "../../assets/images/trash_white.svg";
import editIco from "../../assets/images/edit_white.svg";
import searchIco from "../../assets/images/search.svg";
import arrowIco from "../../assets/images/arrow.svg";

// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  removePost,
  searchPost,
  sortPost,
} from "./redux/redux-post/postActions";

// Functions
import { randomNumber } from "../../functions";
import { Link } from "react-router-dom";

const PostsListOfPosts = () => {
  const reduxData = useSelector((state) => state.admin_postReducer);
  const dispatch = useDispatch();
  const { postsList, searchedList, sortedList } = {
    postsList: reduxData.postsList,
    searchedList: reduxData.searchedPostList,
    sortedList: reduxData.sortedPostList,
  };

  const [inputSearchValue, setInputSearchValue] = useState("");
  const [showSortDropDown, setShowSortDropDown] = useState(false);
  const [selectedDropDownItem, setSelectedDropDownItem] = useState("");

  useEffect(() => {
    dispatch(searchPost(inputSearchValue));
  }, [inputSearchValue]);

  const dropdownHandler = (name) => {
    switch (name) {
      case "publish":
        setSelectedDropDownItem("منتشرشده ها");
        dispatch(sortPost("published"));
        break;
      case "draft":
        setSelectedDropDownItem("پیش‌نویس ها");
        dispatch(sortPost("drafted"));
        break;
      case "newest":
        setSelectedDropDownItem("جدید ترین");
        dispatch(sortPost("newest"));
        break;
      case "oldest":
        setSelectedDropDownItem("قدیمی‌ ترین");
        dispatch(sortPost("oldest"));
        break;

      default:
        break;
    }
    setShowSortDropDown(false);
  };

  const dropdownClickHandler = () => {
    setShowSortDropDown((prevState) => !prevState);
  };

  const postsListUi = (e) => {
    return (
      <tr key={randomNumber()} className="border-b border-gray-200">
        <td className="py-4 px-2">
          <div className="fcenter justify-start gap-2">
            <img
              src={e.image}
              className="hidden md:inline-block w-10 h-10 p-2 bg-gray-300 rounded-full"
            ></img>
            <p className="text-xs font-bf text-gray-500 ">{e.title}</p>
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
            <span className="text-xs text-gray-400">
              {e.date.split("|")[0]}
            </span>
          </div>
        </td>
        <td>
          <div className="fcenter gap-2">
            <Link
              className="w-5 mhover bg-blue-600 p-[3px] rounded-full"
              to="/admin/posts/new-content"
              state={e}
            >
              <img src={editIco} />
            </Link>
            <img
              src={trashIco}
              onClick={() => {
                dispatch(removePost(e));
              }}
              className="w-5 mhover bg-red-500 p-[3px] rounded-full"
            />
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <h3 className="font-bf my-8 text-gray-700">لیست مقاله ها</h3>

      {/* Seacrh & Filter */}
      <div className="fcenter justify-between mb-6">
        <span></span>
        <div className="fcenter flex-wrap gap-2">
          <div className="fcenter justify-between bg-gray-100 flex-grow rounded-md py-1 pr-2 pl-4 gap-1">
            <input
              type="text"
              className="border-none text-xs focus:ring-0 bg-transparent"
              placeholder="جستجو"
              value={inputSearchValue}
              onChange={(e) => setInputSearchValue(e.target.value)}
            />
            <img
              src={searchIco}
              className="bg-purple-600 w-6 h-6 rounded-full p-1 mhover"
            />
          </div>
          <div className="relative fcenter flex-grow min-w-[140px]">
            <button
              id="dropdownDefault"
              data-dropdown-toggle="dropdown"
              className="fcenter justify-between gap-2  text-gray-600 text-xs w-full bg-gray-100 rounded-md py-3 px-3 hover:bg-gray-50 "
              type="button"
              onClick={dropdownClickHandler}
            >
              {selectedDropDownItem
                ? selectedDropDownItem
                : "مرتب سازی بر اساس"}
              <img src={arrowIco} className="w-3 h-3" />
            </button>
            <div
              className={`absolute top-12 w-full z-10 transition-all  ${
                showSortDropDown
                  ? "animate-[fadeInBottom_0.3s]"
                  : "animate-[fadeOutTop_0.3s] invisible"
              }`}
            >
              <ul className=" bg-gray-100 rounded-b-lg shadow-lg shadow-purple-300 text-sm text-gray-700 py-2">
                <li
                  onClick={() => dropdownHandler("publish")}
                  className={filterItemsStyle}
                >
                  <span>منتشرشده ها</span>
                </li>
                <li
                  onClick={() => dropdownHandler("draft")}
                  className={filterItemsStyle}
                >
                  <span>پیش‌نویس ها</span>
                </li>
                <li
                  onClick={() => dropdownHandler("newest")}
                  className={filterItemsStyle}
                >
                  <span>جدید ترین</span>
                </li>
                <li
                  onClick={() => dropdownHandler("oldest")}
                  className={filterItemsStyle}
                >
                  <span>قدیمی ترین</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="border border-gray-300 rounded-lg my-4">
        <table className="leading-normal w-full">
          <thead>
            <tr>
              <th scope="col" className={`${tableHeadItemStyle} text-start`}>
                عنوان
              </th>
              <th scope="col" className={tableHeadItemStyle}>
                وضعیت
              </th>
              <th scope="col" className={tableHeadItemStyle}>
                ایجاد شده در
              </th>
              <th scope="col" className={tableHeadItemStyle}>
                اقدامات بیشتر
              </th>
            </tr>
          </thead>
          <tbody>
            {/* List Of All Posts */}
            {postsList &&
              inputSearchValue.length === 0 &&
              selectedDropDownItem === "" &&
              postsList.map((e) => {
                return postsListUi(e);
              })}
            {/* List Of Sorted (Filtered) Posts */}
            {selectedDropDownItem !== "" &&
              inputSearchValue.length === 0 &&
              sortedList.map((e) => {
                return postsListUi(e);
              })}
            {/* List Of Searched Posts */}
            {inputSearchValue.length > 0 &&
              searchedList.map((e) => {
                return postsListUi(e);
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

// Custom Tailwind Styles
const filterItemsStyle =
  "text-xs cursor-pointer hover:bg-purple-500 hover:text-white w-full px-2 py-1 ";
const tableHeadItemStyle =
  "font-normal border-b border-gray-300 text-center text-gray-500 text-sm px-4 py-3";
