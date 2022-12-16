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
      <div className="bg-white h-fit px-8 py-6 rounded-lg fcenter flex-col gap-8 z-20">
        <div className="fcenter p-4 rounded-tl-xl bg-purple-100 border-r-2 border-purple-400">
          <div className="flex flex-col gap-4 justify-between items-start h-full">
            <p className="w-72 text-justify text-xs pt-2 text-gray-500">
              <img
                className="w-5 bg-purple-600 p-1 rounded-full ml-2 inline-block"
                src={replyIco}
              />
              <span className="text-purple-600 font-bf">در پاسخ به</span>
              {` : ${data.message}`}
            </p>
            <textarea
              value={inputFieldeValue}
              className="minput bg-white w-72 h-20 shadow-md ph py-3 text-xs resize-none"
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
