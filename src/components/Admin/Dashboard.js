import React from "react";

// Icons
import userIco from "../../assets/images/users.svg";
import messageIco from "../../assets/images/message.svg";
import postIco from "../../assets/images/posts.svg";

const Dashboard = () => {
  return (
    <div className="mwrapper">
      {/* Top Header */}
      <div className="fcenter mcontainer gap-2 lg:gap-5 flex-wrap">
        <div className={`${classTopHeader} shadow-purple-500 bg-purple-700`}>
          <img className="w-8 lg:w-14" src={userIco} />
          <div className="fcenter flex-col items-start">
            <span className={classTopHeaderCounter}>142,458</span>
            <span className={classTopHeaderTitle}>بازدید روزانه</span>
          </div>
        </div>
        <div className={`${classTopHeader} shadow-slate-500 bg-slate-700`}>
          <img className="w-8 lg:w-14" src={postIco} />
          <div className="fcenter flex-col items-start">
            <span className={classTopHeaderCounter}>142,458</span>
            <span className={classTopHeaderTitle}>مقاله در سایت</span>
          </div>
        </div>
        <div className={`${classTopHeader} shadow-red-500 bg-red-700`}>
          <img className="w-8 lg:w-14" src={messageIco} />
          <div className="fcenter flex-col items-start">
            <span className={classTopHeaderCounter}>142,458</span>
            <span className={classTopHeaderTitle}>پیام مستقیم</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// Custom Tailwind Style
const classTopHeader =
  "fcenter gap-2 md:gap-6 h-20 lg:h-32 flex-grow rounded-lg shadow-lg px-4";
const classTopHeaderCounter = "text-sm lg:text-base text-white";
const classTopHeaderTitle = "text-xs lg:text-sm text-white";
