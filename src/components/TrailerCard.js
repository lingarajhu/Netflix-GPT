import React, { useState } from "react";
import { IMG_POSTER_CDN } from "../utils/constants";

const TrailerCard = ({ movie }) => {
  const [cardShow, setShowCard] = useState(null);

  const handleEnter = () => {
    setShowCard(true);
  };

  const handleLeave = () => {
    setShowCard(false);
  };

  return (
    <div
      className="h-full relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <img
        className="h-full w-full rounded-md"
        alt="TrailerPoster"
        src={IMG_POSTER_CDN + movie?.poster_path}
      />
      {cardShow && (
        <div className="absolute top-0 w-full text-red-600 font-bold text-xl text-start bg-gradient-to-b from-black rounded-md">
          Trailer
        </div>
      )}
    </div>
  );
};

export default TrailerCard;
