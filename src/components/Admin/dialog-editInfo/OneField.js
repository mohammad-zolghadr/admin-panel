import React from "react";
import { useState } from "react";

const OneField = (props) => {
  const { changeValue, setShowOneField } = props.data;
  const [inputFieldeValue, setInputFieldValue] = useState("");

  const dispatch = changeValue.dispatch();

  const clickHandler = (e) => {
    setShowOneField(false);

    // Redux Update Data
    e.target.name === "confirm" &&
      dispatch(changeValue.action(inputFieldeValue));
  };

  return (
    <div className="w-full h-screen fixed z-50 top-0 left-0 fcenter">
      <span
        onClick={clickHandler}
        className="block absolute w-full h-screen z-20 bg-black opacity-80"
      ></span>
      <div className="bg-white px-8 py-6 rounded-lg fcenter flex-col gap-4 z-20">
        <input
          value={inputFieldeValue}
          className="minput w-72 shadow-md ph py-3 text-xs"
          placeholder="مقدار جدید را اینجا وارد کنید"
          type="text"
          onChange={(e) => {
            setInputFieldValue(e.target.value);
          }}
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

export default OneField;
