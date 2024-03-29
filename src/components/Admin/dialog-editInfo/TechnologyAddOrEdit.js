import React from "react";
import { useState } from "react";

// Icon
import trashIco from "../../../assets/images/trash_white.svg";

// Redux
import { useDispatch } from "react-redux";
import {
  addItemToListOfTechnologies,
  editItemOfTechnologies,
  removeItemFromTechnologies,
} from "../redux/redux-info/infoActions";
import { uploadImage } from "../../../fakeBackendFuctions";

// Components
import Loading from "../../Loading";

const TechnologyAddOrEdit = (props) => {
  const { dialogFunction, dialogData } = props.data;
  const [isLoading, setIsLoading] = useState(false);
  const setData = () => {
    if (dialogData)
      return {
        name: dialogData.name,
        link: dialogData.link,
        tech: dialogData.tech,
      };
    else
      return {
        name: "",
        link: "",
        tech: "",
      };
  };
  const [inputFieldValue, setInputFieldValue] = useState(setData());
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    if (e.target.name === "confirm") {
      setIsLoading(true);
      uploadImage(inputFieldValue.link).then((imageLink) => {
        dialogFunction({ isShow: false });
        !dialogData
          ? dispatch(
              addItemToListOfTechnologies({
                ...inputFieldValue,
                link: imageLink,
              })
            )
          : dispatch(
              editItemOfTechnologies({
                ...inputFieldValue,
                link: imageLink,
                id: dialogData.id,
              })
            );
      });
    } else if (!isLoading) dialogFunction({ isShow: false });
  };

  return (
    <div className="w-full h-screen fixed z-50 top-0 left-0 fcenter">
      <span
        onClick={clickHandler}
        className="block absolute w-full h-screen z-20 bg-black opacity-80"
      ></span>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="bg-white px-8 py-6 rounded-lg fcenter flex-col gap-4 z-20">
          <div className="fcenter gap-2">
            <input
              value={inputFieldValue.name}
              className="minput w-56 shadow-md py-3 ph text-xs"
              placeholder="اسم تخصص را اینجا وارد کنید"
              type="text"
              onChange={(e) => {
                setInputFieldValue({
                  ...inputFieldValue,
                  name: e.target.value,
                });
              }}
            />
            <div className="bg-gray-100 py-1 px-2 rounded-md shadow-md">
              <label className="fcenter" forhtml="choosePicture">
                <span className="bg-gray-200 font-bf text-xs text-gray-400 px-3 py-2 rounded-md mhover ">
                  انتخاب عکس
                </span>
                <input
                  id="choosePicture"
                  type="file"
                  className="hidden"
                  accept="image/jpeg , image/png , .svg"
                  onChange={(e) => {
                    setInputFieldValue({
                      ...inputFieldValue,
                      link: e.target.files[0],
                    });
                  }}
                />
              </label>
            </div>
          </div>
          <input
            value={inputFieldValue.tech}
            className="minput w-full shadow-md py-3 ph text-xs"
            placeholder="اسم تکنولوژی ها را اینجا وارد کنید و با - از هم جدا کنید"
            type="text"
            onChange={(e) => {
              setInputFieldValue({
                ...inputFieldValue,
                tech: e.target.value,
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
            {dialogData && (
              <img
                src={trashIco}
                className="w-6 bg-red-600 rounded-full p-1 mhover"
                onClick={() => {
                  dialogFunction({ isShow: false });
                  dispatch(removeItemFromTechnologies(dialogData));
                }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnologyAddOrEdit;
