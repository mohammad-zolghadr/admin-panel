import React from "react";

// Icons
import pic from "../../assets/images/profile.svg";
import trashIco from "../../assets/images/trash.svg";
import editIco from "../../assets/images/edit.svg";

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

  return (
    <div>
      <h3 className="font-bf text-gray-700">لیست مقاله ها</h3>

      <div>{/* Search - Filter */}</div>

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
      </div>
    </div>
  );
};

export default PostsListOfPosts;
