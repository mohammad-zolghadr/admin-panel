import React, { useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { addItemToListOfProject } from "../redux/redux-info/infoActions";

const ProjectDialog = (props) => {
  const dispatch = useDispatch();
  const reduxData = useSelector((state) => state.admin_infoReducer);
  const { setShowDialog, id = -1 } = props.data;
  const setData = () => {
    if (id === -1)
      return {
        title: "",
        link: "",
        description: "",
        technologies: "",
      };
    else {
      const findedItem = reduxData.listOfProjects.find(
        (element) => element.id === id
      );
      return {
        title: findedItem.title,
        link: findedItem.link,
        description: findedItem.description,
        technologies: findedItem.technologies,
      };
    }
  };

  const [inputFieldeValue, setInputFieldValue] = useState(setData());

  const clickHandler = (e) => {
    setShowDialog(false);
    e.target.name === "confirm" &&
      dispatch(addItemToListOfProject(inputFieldeValue));
  };

  const inputHandler = (e) => {
    setInputFieldValue({
      ...inputFieldeValue,
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
            value={inputFieldeValue.title}
            className="minput w-36 md:w-56 shadow-md py-3 ph text-xs"
            placeholder="عنوان پروژه"
            type="text"
            name="title"
            onChange={inputHandler}
          />
          <input
            value={inputFieldeValue.link}
            className="minput w-36 md:w-56 shadow-md py-3 ph text-xs"
            placeholder="لینک مرتبط"
            type="text"
            name="link"
            onChange={inputHandler}
          />
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
          value={inputFieldeValue.technologies}
          className="minput w-full shadow-md py-3 ph text-xs"
          placeholder="اسم تکنولوژی ها را اینجا وارد کنید و با - از هم جدا کنید"
          type="text"
          name="technologies"
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

export default ProjectDialog;
