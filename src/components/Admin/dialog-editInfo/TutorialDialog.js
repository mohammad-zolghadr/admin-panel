import React, { useState } from "react";

// Redux
import { useDispatch } from "react-redux";
import { addItemToListOfTutorial } from "../redux/redux-info/infoActions";
import { uploadImage } from "../../../fakeBackendFuctions";

const TutorialDialog = (props) => {
  const { setShowDialog } = props.data;
  const dispatch = useDispatch();
  const [inputFieldValue, setInputFieldValue] = useState({
    title: "",
    time: "",
    image: "",
    link: "",
    description: "",
    technologies: "",
  });

  const clickHandler = (e) => {
    setShowDialog(false);

    if (e.target.name === "confirm")
      uploadImage(inputFieldValue.image).then((imageLink) => {
        dispatch(
          addItemToListOfTutorial({ ...inputFieldValue, image: imageLink })
        );
      });
  };

  const inputHandler = (e) => {
    setInputFieldValue({
      ...inputFieldValue,
      [e.target.name]: e.target.value,
    });
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
            value={inputFieldValue.title}
            className="minput w-32 md:w-56 shadow-md py-3 ph text-xs"
            placeholder="عنوان آموزش"
            type="text"
            name="title"
            onChange={inputHandler}
          />
          <input
            value={inputFieldValue.time}
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
              <input
                id="choosePicture"
                type="file"
                className="hidden"
                accept="image/png , image/jpeg , .svg "
                onChange={(e) => {
                  setInputFieldValue({
                    ...inputFieldValue,
                    image: e.target.files[0],
                  });
                }}
              />
            </label>
          </div>
        </div>
        <input
          value={inputFieldValue.description}
          className="minput w-full shadow-md py-3 ph text-xs"
          placeholder="توضیحات"
          type="text"
          name="description"
          onChange={inputHandler}
        />
        <input
          value={inputFieldValue.link}
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
