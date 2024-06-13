import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
  const playIcon = <FontAwesomeIcon icon={faPlay} />;
  const moreInfoIcon = <FontAwesomeIcon icon={faCircleInfo} />;
  return (
    <div className="pt-72 px-10 w-screen aspect-video absolute bg-gradient-to-r from-black">
      <h2 className="font-bold text-white text-5xl">{title}</h2>
      <p className="py-2 text-lg w-5/12 text-gray-400">{overview}</p>
      <div>
        <button className="bg-white p-2 w-32 rounded-md text-black text-lg hover:opacity-70">
          {playIcon} Play
        </button>
        <button className="bg-gray-400 p-2 w-32 mx-3 rounded-md text-black text-lg hover:opacity-80">
          {" "}
          {moreInfoIcon} MoreInfo
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
