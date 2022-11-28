import React, { useState } from "react";

// Components
import AreaChart from "./AreaChart";

// Icons
import userIco from "../../assets/images/users.svg";
import messageIco from "../../assets/images/message.svg";
import postIco from "../../assets/images/posts.svg";

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
      borderColor: "#7E22CE",
      backgroundColor: "#7E22CE77",
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
      borderColor: "#334155",
      backgroundColor: "#33415577",
    },
  ],
};

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

  // Chart or Message Component Showing
  const whichComponentMustShow = () => {
    if (showWhichChart === "week") return <AreaChart data={weekChartData} />;
    else if (showWhichChart === "post")
      return <AreaChart data={postsChartData} />;
    else if (showWhichChart === "message") return <h2>لیست پیام ها</h2>;
  };

  return (
    <div className="mwrapper gap-20">
      {/* Top Header */}
      <div className="fcenter mcontainer gap-2 lg:gap-5 flex-wrap">
        <div
          className={`${classTopHeader} shadow-purple-500 bg-purple-700`}
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
          className={`${classTopHeader} shadow-slate-500 bg-slate-700`}
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
          className={`${classTopHeader} shadow-red-500 bg-red-700`}
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
      <div className="fcenter w-10/12 h-64 lg:h-80">
        {whichComponentMustShow()}
      </div>
    </div>
  );
};

export default Dashboard;

// Custom Tailwind Style
const classTopHeader =
  "fcenter gap-2 md:gap-6 h-20 lg:h-24 flex-grow rounded-lg shadow-lg px-4 mhover";
const classTopHeaderCounter = "text-sm lg:text-base text-white";
const classTopHeaderTitle = "text-xs lg:text-sm text-white";
