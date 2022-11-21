import React, { useState } from "react";

const TutorialDialog = (props) => {
  const { setShowDialog } = props.data;
  const [inputFieldeValue, setInputFieldValue] = useState({
    title: "",
    time: "",
    image: "",
    link: "",
    description: "",
    technologies: "",
  });

  const clickHandler = (e) => {
    setShowDialog(false);
    // Redux Update Data
  };

  const inputHandler = (e) => {
    setInputFieldValue({
      ...inputFieldeValue,
      [e.target.name]: e.target.value,
    });
    console.log(inputFieldeValue);
  };

  return (
    <div className="w-full h-screen fixed z-50 top-0 left-0 fcenter">
      <span
        onClick={clickHandler}
        className="block absolute w-full h-screen z-20 bg-black opacity-80"
      ></span>
      <div className="bg-white px-8 py-6 rounded-lg fcenter flex-col gap-4 z-20">
        <div className="fcenter gap-2">
          <input
            value={inputFieldeValue.title}
            className="minput w-32 md:w-56 shadow-md py-3 ph text-xs"
            placeholder="عنوان آموزش"
            type="text"
            name="title"
            onChange={inputHandler}
          />
          <input
            value={inputFieldeValue.time}
            className="minput w-20 md:w-40 shadow-md py-3 ph text-xs"
            placeholder="زمان آموزش (به ساعت)"
            type="text"
            name="time"
            onChange={inputHandler}
          />
          <div className="bg-gray-100 py-1 px-2 rounded-md shadow-md">
            <label className="fcenter" forhtml="choosePicture">
              <span className="bg-gray-200 font-bf text-xs text-gray-400 px-2 py-2 rounded-md mhover ">
                انتخاب عکس
              </span>
              <input id="choosePicture" type="file" className="hidden" />
            </label>
          </div>
        </div>
        <input
          value={inputFieldeValue.description}
          className="minput w-full shadow-md py-3 ph text-xs"
          placeholder="توضیحات"
          type="text"
          name="description"
          onChange={inputHandler}
        />
        <input
          value={inputFieldeValue.link}
          className="minput w-full shadow-md py-3 ph text-xs"
          placeholder="لینک آموزش"
          type="text"
          name="link"
          onChange={inputHandler}
        />
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
            تایید
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorialDialog;
