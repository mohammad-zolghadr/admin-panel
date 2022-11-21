import React, { useState } from "react";

// icons
import editIco from "../../assets/images/edit_red.svg";
import checkboxActiveIco from "../../assets/images/checkbox_active.svg";
import checkboxDeactiveIco from "../../assets/images/checkbox_deactive.svg";

// Components
import TutorialDialog from "./dialog-editInfo/TutorialDialog";

const InfoProjectList = (props) => {
  const { title, imageLink, time, platform, isMain, description, link } =
    props.data;
  const [showEditDialog, setShowEditDialog] = useState(false);
  return (
    <div className="basis-60 flex-grow fcenter flex-col  bg-white gap-4 p-4 shadow-lg shadow-gray-300 rounded-lg relative">
      {showEditDialog && (
        <TutorialDialog data={{ setShowDialog: setShowEditDialog }} />
      )}
      <div className="fcenter justify-end flex-grow gap-1 absolute top-0 left-0 py-1 bg-gray-50 px-3  rounded-br-lg rounded-tl-lg">
        <img
          onClick={() => setShowEditDialog(true)}
          className="w-[20px] mb-[3px] mhover"
          src={editIco}
        />
        <img
          className="w-[20px] mhover"
          src={isMain ? checkboxActiveIco : checkboxDeactiveIco}
        />
      </div>

      <div className="w-full fcenter justify-between">
        <div className="fcenter gap-2 mt-4">
          {imageLink ? (
            <img className="block w-12 h-12 rounded-full " src={imageLink} />
          ) : (
            <span className="block w-12 h-12 bg-gray-200 rounded-full "></span>
          )}
          <div className="fcenter flex-col items-start gap-1">
            <h3 className="font-bf flex-grow text-gray-600 text-sm">{title}</h3>
            <p className="text-xs text-gray-400 font-bf">{`پلتفرم : ${platform}   |   زمان : ${time}`}</p>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <p className="text-xs text-justify leading-5 text-gray-500 font-nf">
          {description}
        </p>
      </div>
      <p className="w-full  text-left text-xs text-gray-600 font-bf">
        Link : <span className="text-gray-400 font-nf">{link}</span>
      </p>
    </div>
  );
};

export default InfoProjectList;
