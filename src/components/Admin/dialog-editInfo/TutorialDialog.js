import React, { useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToListOfTutorial,
  editItemOfTutorial,
} from "../redux/redux-info/infoActions";
import { uploadImage } from "../../../fakeBackendFuctions";

// Components
import Loading from "../../Loading";

const TutorialDialog = (props) => {
  const { setShowDialog, id = -1 } = props.data;
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const reduxData = useSelector((state) => state.admin_infoReducer);
  const setData = () => {
    if (id === -1)
      return {
        id: -1,
        title: "",
        time: "",
        imageLink: "",
        link: "",
        description: "",
        technologies: "",
        platform: "",
      };
    else {
      const findedItem = reduxData.listOfTutorials.find(
        (element) => element.id === id
      );
      return {
        id: id,
        title: findedItem.title,
        time: findedItem.time,
        imageLink: findedItem.imageLink,
        link: findedItem.link,
        description: findedItem.description,
        technologies: findedItem.technologies,
        platform: findedItem.platform,
      };
    }
  };
  const [inputFieldValue, setInputFieldValue] = useState(setData());

  const clickHandler = (e) => {
    if (e.target.name === "confirm") {
      setIsLoading(true);
      if (id === -1)
        uploadImage(inputFieldValue.image).then((imageLink) => {
          setShowDialog(false);
          dispatch(
            addItemToListOfTutorial({
              ...inputFieldValue,
              imageLink: imageLink,
            })
          );
        });
      else
        uploadImage(inputFieldValue.image).then((imageLink) => {
          setShowDialog(false);
          dispatch(
            editItemOfTutorial({
              ...inputFieldValue,
              imageLink: imageLink,
            })
          );
        });
    } else if (!isLoading) setShowDialog(false);
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
      {isLoading ? (
        <div className="w-12 h-12 z-30">
          <Loading />
        </div>
      ) : (
        <div className="bg-white relative px-8 py-6 mx-4 overflow-hidden rounded-lg fcenter flex-col gap-4 z-20">
          <div className="fcenter gap-2">
            <input
              value={inputFieldValue.title}
              className="minput w-5/12 shadow-md py-3 ph text-xs"
              placeholder="عنوان آموزش"
              type="text"
              name="title"
              onChange={inputHandler}
            />
            <input
              value={inputFieldValue.time}
              className="minput w-4/12 shadow-md py-3 ph text-xs"
              placeholder="زمان آموزش (به ساعت)"
              type="text"
              name="time"
              onChange={inputHandler}
            />
            <div className="w-3/12 bg-gray-100 py-1 px-2 rounded-md shadow-md">
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
                      imageLink: e.target.files[0],
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
          <div className="w-full fcenter gap-2 ">
            <input
              value={inputFieldValue.link}
              className="minput w-2/3 shadow-md py-3 ph text-xs"
              placeholder="لینک آموزش"
              type="text"
              name="link"
              onChange={inputHandler}
            />
            <input
              value={inputFieldValue.platform}
              className="minput w-1/3 shadow-md py-3 ph text-xs"
              placeholder="پلتفرم"
              type="text"
              name="platform"
              onChange={inputHandler}
            />
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
              تایید
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TutorialDialog;
