import React from "react";
import { useState } from "react";

// Icons
import replyIco from "../../../assets/images/reply_arrow.svg";

const MessageReply = (props) => {
  const { data, setShowOneField } = props.data;
  const [inputFieldeValue, setInputFieldValue] = useState("");

  //   const dispatch = changeValue.dispatch();

  const clickHandler = (e) => {
    setShowOneField(false);

    // Redux Update Data
    // e.target.name === "confirm" &&
    //   dispatch(changeValue.action(inputFieldeValue));
  };

  return (
    <div className="w-full h-screen fixed z-50 top-0 left-0 fcenter">
      <span
        onClick={clickHandler}
        className="block absolute w-full h-screen z-20 bg-black opacity-80"
      ></span>
      <div className="bg-white px-8 py-6 rounded-lg fcenter flex-col gap-8 z-20">
        <div className="fcenter gap-3 h-36">
          <div className="block w-[2px] h-full  bg-purple-400"></div>
          <div className="flex flex-col justify-between items-start h-full">
            <p className="w-72 text-justify text-xs pt-2 text-gray-500">
              <img
                className="w-5 bg-gray-400 p-1 rounded-full ml-2 inline-block"
                src={replyIco}
              />
              <span className="text-gray-400">در پاسخ به</span>
              {` : ${data.message.substring(0, 75)} ...`}
            </p>
            <textarea
              value={inputFieldeValue}
              className="minput w-72 h-20 shadow-md ph py-3 text-xs resize-none"
              placeholder="متن پیام را اینجا وارد کنید"
              type="text"
              onChange={(e) => {
                setInputFieldValue(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="fcenter gap-2">
          <button
            name="cancel"
            onClick={clickHandler}
            className="px-6 py-1 rounded-lg font-bf mhover bg-red-300 text-red-700"
          >
            لغو
          </button>
          <button
            name="confirm"
            onClick={clickHandler}
            className="px-6 py-1 rounded-lg font-bf mhover bg-green-700 text-white"
          >
            ارسال
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageReply;
