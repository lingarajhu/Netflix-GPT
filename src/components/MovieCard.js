import React, { useState } from "react";
import { IMG_POSTER_CDN } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addWatchList, setIsWatchList } from "../utils/movieSlice";

const MovieCard = ({ poster_path, title, imdbRating, currentMovie }) => {
  const [showCardName, setShowCardName] = useState(false);
  const [watchList, setWatchList] = useState(false);
  const checkWatchList = useSelector((store) => store?.movieData?.watchList);

  const dispatch = useDispatch();

  const addIcon = <FontAwesomeIcon icon={faPlus} />;
  const checkIcon = <FontAwesomeIcon icon={faCheck} />;

  const handleEnter = () => {
    setShowCardName(true);
  };

  const handleLeave = () => {
    setShowCardName(false);
  };

  const handleClick = () => {
    setWatchList(true);
    if (!checkWatchList.includes(currentMovie)) {
      dispatch(addWatchList(currentMovie));
    }
    dispatch(setIsWatchList(true));
  };

  if (!poster_path) return;

  return (
    <div
      onMouseLeave={handleLeave}
      onMouseEnter={handleEnter}
      className="bg-transparent  relative rounded-md w-[200px] hover:scale-110 transition ease-in-out duration-300"
    >
      <img
        alt="Movie Poster"
        className="rounded-md"
        src={IMG_POSTER_CDN + poster_path}
      />
      {showCardName && (
        <div className="w-full absolute bottom-0 px-3 pb-3 bg-gradient-to-t from-black rounded-md">
          <div className="flex justify-between items-center -mb-3">
            <p className="w-8/12 text-white text-lg font-bold transition duration-200">
              {title}
            </p>
            <button
              onClick={handleClick}
              className="text-black text-xl text-center h-10 w-10 bg-white/60 rounded-full hover:bg-white transition duration-200"
            >
              {!watchList ? addIcon : checkIcon}
            </button>
          </div>
          <span className="text-white font-bold text-sm">
            {imdbRating.toFixed(1)}
          </span>
          <span className="font-extrabold text-amber-500"> IMDb</span>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
