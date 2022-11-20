import React, { useState } from "react";

// icons
import editIco from "../../assets/images/edit_red.svg";
import checkboxActiveIco from "../../assets/images/checkbox_active.svg";
import checkboxDeactiveIco from "../../assets/images/checkbox_deactive.svg";

const InfoProjectList = (props) => {
  const { title, isMain, description, technologies, link } = props.data;
  const [maxDescriptionCharShow, setMaxDesciptionCharShow] = useState(70);
  return (
    <div className="basis-60 flex-grow fcenter flex-col  bg-white gap-4 p-4 shadow-lg shadow-gray-300 rounded-lg">
      <div className="w-full fcenter justify-between">
        <h3 className="font-bf flex-grow text-gray-600 text-base">{title}</h3>
        <div className="fcenter justify-end flex-grow gap-2 ">
          <img className="w-[24px] mb-[3px] mhover" src={editIco} />
          <img
            className="w-[24px] mhover"
            src={isMain ? checkboxActiveIco : checkboxDeactiveIco}
          />
        </div>
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
