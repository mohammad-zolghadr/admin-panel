import React from "react";

// Style
import style from "../sass/Loading.scss";

const Loading = (props) => {
  const { full } = props.data || "";
  if (full)
    return (
      <>
        <div className="bg-black fcenter opacity-70 w-full h-screen fixed z-20 top-0 right-0">
          <div className="w-12 h-12">
            <div className="loadingCircle animate-spin"></div>
          </div>
        </div>
      </>
    );
  else
    return (
      <div className="w-12 h-12 z-30">
        <div className="loadingCircle animate-spin"></div>
      </div>
    );
};

export default Loading;
