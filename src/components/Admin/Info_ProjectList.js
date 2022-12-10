import React, { useState } from "react";

// icons
import editIco from "../../assets/images/edit_white.svg";
import checkboxActiveIco from "../../assets/images/checkbox_active.svg";
import checkboxDeactiveIco from "../../assets/images/checkbox_deactive.svg";
import deleteIco from "../../assets/images/trash_white.svg";

// Component
import ProjectDialog from "./dialog-editInfo/ProjectDialog";

// Redux
import { useDispatch } from "react-redux";
import {
  changeIsMainOfProject,
  removeItemOfProject,
} from "./redux/redux-info/infoActions";

const InfoProjectList = (props) => {
  const dispatch = useDispatch();
  const { id, title, isMain, description, technologies, link } = props.data;
  const [maxDescriptionCharShow, setMaxDesciptionCharShow] = useState(70);
  const [showEditDialog, setShowEditDialog] = useState(false);

  return (
    <div className="basis-60 flex-grow fcenter flex-col  bg-white gap-4 p-4 shadow-lg shadow-gray-300 rounded-lg relative">
      {showEditDialog && (
        <ProjectDialog data={{ setShowDialog: setShowEditDialog, id }} />
      )}
      <div className="fcenter justify-end py-1 flex-grow gap-1 shadow-md shadow-gray-200 absolute top-0 left-0 bg-gray-50 px-3  rounded-br-lg rounded-tl-lg">
        <img
          onClick={() => setShowEditDialog(true)}
          className="w-[20px] bg-blue-600 rounded-full  p-[3px] ml-[3px] mhover"
          src={editIco}
        />
        <img
          onClick={() => dispatch(removeItemOfProject(props.data))}
          className="w-[20px] bg-red-600 rounded-full  p-[3px]  mhover"
          src={deleteIco}
        />
        <img
          className="w-[24px] mhover"
          src={isMain ? checkboxActiveIco : checkboxDeactiveIco}
          onClick={() =>
            dispatch(changeIsMainOfProject({ ...props.data, isMain: !isMain }))
          }
        />
      </div>
      <div className="w-full fcenter justify-between">
        <h3 className="font-bf flex-grow text-gray-600 text-base">{title}</h3>
      </div>
      <div className="w-full ">
        <p className="text-xs text-gray-500 font-bf">
          {description.substring(0, maxDescriptionCharShow)}{" "}
          {description.length > maxDescriptionCharShow && (
            <span
              className="text-red-400 mhover"
              onClick={() => setMaxDesciptionCharShow(Infinity)}
            >
              ...
            </span>
          )}
        </p>
      </div>
      <div className="w-full  fcenter flex-col gap-4">
        <p className="text-xs text-left text-gray-400 ">{technologies}</p>
        <p className="w-full  text-left text-xs text-gray-600 font-bf">
          Link : <span className="text-gray-400 font-nf">{link}</span>
        </p>
      </div>
    </div>
  );
};

export default InfoProjectList;
