import React, { useState } from "react";

// Components
import AreaChart from "./AreaChart";
import MessageReply from "./dialog-editInfo/MessageReply";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

// Icons
import userIco from "../../assets/images/users.svg";
import messageIco from "../../assets/images/message.svg";
import postIco from "../../assets/images/posts.svg";
import trashIco from "../../assets/images/trash_white.svg";
import replyIco from "../../assets/images/reply_arrow.svg";
import arrowIco from "../../assets/images/arrow.svg";

// Chart Data
const labels = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
];
const weekChartData = {
  labels,
  datasets: [
    {
      fill: true,
      label: "بازدید هفتگی به تفکیک روز",
      data: [1264, 2424, 9754, 3796, 2849, 4560, 3940],
      borderColor: "#0891B2",
      backgroundColor: "#0891B277",
    },
  ],
};
const postsChartData = {
  labels,
  datasets: [
    {
      fill: true,
      label: "مقالات منتشر شده در این هفته",
      data: [26, 12, 54, 21, 86, 72, 42],
      borderColor: "#DC2626",
      backgroundColor: "#DC262677",
    },
  ],
};

// Table Data
const tableData = [
  {
    id: 1,
    message: "متن پیام به صورت خلاصه شده...",
    email: "exampla@gmail.com",
    date: "1401/08/28",
  },
  {
    id: 2,
    message: "فلان قسمت مشکل داره داداش",
    email: "exampla@gmail.com",
    date: "1396/06/28",
  },
  {
    id: 3,
    message:
      "این قسمت فقط برای پیام مستقیم به ادمین هست نه کامنت گذاشتن زیر مقاله ها و پست ها",
    email: "exampla@gmail.com",
    date: "1401/10/22",
  },
  {
    id: 4,
    message: "یه پیشنهاد جدید دارم برای شما",
    email: "exampla@gmail.com",
    date: "1403/04/02",
  },
];

// Calculate numbers in array
const calculateNumbers = (array) => {
  const calc = array.reduce((a, b) => a + b);
  return separateNumbers(calc);
};

// Separate numbers
const separateNumbers = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const Dashboard = () => {
  const [showWhichChart, setShowWhichChart] = useState("week");
  const [dialogReplyMesssage, setDialogReplyMesssage] = useState({
    show: false,
    data: "",
  });

  const replyToMessage = (data) => {
    setDialogReplyMesssage({ show: true, data });
  };

  // Chart or Message Component Showing
  const whichComponentMustShow = () => {
    if (showWhichChart === "week") return <AreaChart data={weekChartData} />;
    else if (showWhichChart === "post")
      return <AreaChart data={postsChartData} />;
    else if (showWhichChart === "message")
      return (
        <div className="w-full border border-gray-300 bg-white rounded-lg mt-10">
          <table className="w-full leading-normal">
            <thead>
              <tr>
                <th scope="col" className={`${tableHeadItemStyle} text-start`}>
                  متن پیام
                </th>
                <th
                  scope="col"
                  className={`${tableHeadItemStyle} hidden md:table-cell`}
                >
                  ارسال شده توسط
                </th>
                <th scope="col" className={tableHeadItemStyle}>
                  ارسال شده در
                </th>
                <th scope="col" className={tableHeadItemStyle}>
                  اقدامات بیشتر
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((e) => {
                return (
                  <tr key={e.id} className="w-full border-b border-gray-200">
                    <td className=" py-4 px-2">
                      <div className="fcenter justify-start gap-2">
                        <p className="text-xs text-gray-500 ">
                          {e.message.substring(0, 50)}...
                        </p>
                      </div>
                    </td>
                    <td className="hidden md:table-cell">
                      <div className="fcenter">
                        <span className="text-xs text-gray-400">{e.email}</span>
                      </div>
                    </td>
                    <td>
                      <div className="fcenter">
                        <span className="text-xs text-gray-400">{e.date}</span>
                      </div>
                    </td>
                    <td>
                      <div className="fcenter gap-2">
                        <Tooltip
                          delayShow={500}
                          anchorId={`dashboardMessageReplyTooltip${e.id}`}
                          content="پاسخ به این پیام"
                        />
                        <img
                          id={`dashboardMessageReplyTooltip${e.id}`}
                          src={replyIco}
                          onClick={() => replyToMessage(e)}
                          className="w-5 md:w-6 bg-green-700 rounded-full p-1 mhover"
                        />
                        <img
                          src={trashIco}
                          className="w-5 md:w-6 bg-red-600 rounded-full p-1 mhover"
                        />
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
              <button className="fcenter w-6 h-6 hover:bg-gray-100">
                <img src={arrowIco} className="w-3 rotate-90" />
              </button>
            </div>
          </div>
        </div>
      );
  };

  return (
    <div className="mwrapper gap-10 pb-32 md:pb-0">
      {dialogReplyMesssage.show && (
        <MessageReply
          data={{
            setShowOneField: setDialogReplyMesssage,
            data: dialogReplyMesssage.data,
          }}
        />
      )}
      {/* Top Header */}
      <div className="fcenter mcontainer lg:w-2/3 gap-2 lg:gap-5 flex-wrap">
        <div
          className={`${classTopHeader}  shadow-md bg-cyan-600`}
          onClick={() => setShowWhichChart("week")}
        >
          <img className="w-8 lg:w-10" src={userIco} />
          <div className="fcenter flex-col items-start">
            <span className={classTopHeaderCounter}>
              {calculateNumbers(weekChartData.datasets[0].data)}
            </span>
            <span className={classTopHeaderTitle}>بازدید هفتگی</span>
          </div>
        </div>
        <div
          className={`${classTopHeader}  shadow-md bg-red-600`}
          onClick={() => setShowWhichChart("post")}
        >
          <img className="w-8 lg:w-10" src={postIco} />
          <div className="fcenter flex-col items-start">
            <span className={classTopHeaderCounter}>
              {calculateNumbers(postsChartData.datasets[0].data)}
            </span>
            <span className={classTopHeaderTitle}>مقاله در سایت</span>
          </div>
        </div>
        <div
          className={`${classTopHeader}  shadow-md bg-amber-500`}
          onClick={() => setShowWhichChart("message")}
        >
          <img className="w-8 lg:w-10" src={messageIco} />
          <div className="fcenter flex-col items-start">
            <span className={classTopHeaderCounter}>142</span>
            <span className={classTopHeaderTitle}>پیام مستقیم</span>
          </div>
        </div>
      </div>

      {/* Chart or Message */}
      <div className="fcenter flex-1 w-10/12 pb-20">
        {whichComponentMustShow()}
      </div>
    </div>
  );
};

export default Dashboard;

// Custom Tailwind Style
const classTopHeader =
  "fcenter gap-2 md:gap-6 h-20 lg:h-24 rounded flex-grow  shadow-lg px-4 mhover";
const classTopHeaderCounter = "text-sm lg:text-base text-white";
const classTopHeaderTitle = "text-xs lg:text-sm text-white";
const tableHeadItemStyle =
  "font-normal border-b text-center text-gray-500 text-xs py-3 px-2 ";
