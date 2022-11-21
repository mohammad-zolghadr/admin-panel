import React from "react";
import { useState } from "react";

const TechnologyAddOrEdit = (props) => {
  const { setShowDialog } = props.data;
  const [inputFieldeValue, setInputFieldValue] = useState({
    title: "",
    image: "",
    technologies: "",
  });

  const clickHandler = (e) => {
    setShowDialog(false);
    // Redux Update Data
  };

  return (
    <div className="w-full h-screen fixed z-50 top-0 fcenter">
      <span className="block absolute w-full h-screen z-20 bg-black opacity-80"></span>
      <div className="bg-white px-8 py-6 rounded-lg fcenter flex-col gap-4 z-20">
        <div className="fcenter gap-2">
          <input
            value={inputFieldeValue.title}
            className="minput w-56 shadow-md py-3 ph text-xs"
            placeholder="اسم تخصص را اینجا وارد کنید"
            type="text"
            onChange={(e) => {
              setInputFieldValue({
                ...inputFieldeValue,
                title: e.target.value,
              });
            }}
          />
          <div className="bg-gray-100 py-1 px-2 rounded-md shadow-md">
            <label className="fcenter" forhtml="choosePicture">
              <span className="bg-gray-200 font-bf text-xs text-gray-400 px-3 py-2 rounded-md mhover ">
                انتخاب عکس
              </span>
              <input id="choosePicture" type="file" className="hidden" />
            </label>
          </div>
        </div>
        <input
          value={inputFieldeValue.technologies}
          className="minput w-full shadow-md py-3 ph text-xs"
          placeholder="اسم تکنولوژی ها را اینجا وارد کنید و با - از هم جدا کنید"
          type="text"
          onChange={(e) => {
            setInputFieldValue({
              ...inputFieldeValue,
              technologies: e.target.value,
            });
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

export default TechnologyAddOrEdit;
