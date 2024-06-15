import React from "react";
import { IMG_POSTER_CDN } from "../utils/constants";

const TrailerCard = ({ movie }) => {
  return (
    <div className="h-full">
      <img
        className="h-full w-full rounded-md"
        alt="TrailerPoster"
        src={IMG_POSTER_CDN + movie?.poster_path}
      />
    </div>
  );
};

export default TrailerCard;
