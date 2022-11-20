import React from "react";
import { useState } from "react";

const OneField = (props) => {
  const { setInputValue, setShowOneField } = props.data;
  const [inputFieldeValue, setInputFieldValue] = useState();

  const clickHandler = (e) => {
    setShowOneField(false);
    e.target.name === "confirm" && setInputValue(inputFieldeValue);
  };

  return (
    <div className="w-full h-screen fixed z-50 top-0 fcenter">
      <span className="block absolute w-full h-screen z-20 bg-black opacity-80"></span>
      <div className="bg-white px-8 py-6 rounded-lg fcenter flex-col gap-4 z-20">
        <input
          value={inputFieldeValue}
          className="minput w-56 shadow-md"
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
