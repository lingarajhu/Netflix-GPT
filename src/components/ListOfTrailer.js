import React from "react";
import TrailerCard from "./TrailerCard";
import { useDispatch } from "react-redux";
import { addFetureClickedMovie } from "../utils/movieSlice";

const ListOfTrailer = ({ movieList }) => {
  const dispatch = useDispatch();
  const handleClick = (movie) => {
    dispatch(addFetureClickedMovie(movie));
  };

  return (
    <div className="w-5/12 overflow-x-auto">
      <div className="text-white rounded-md w-fit flex flex-row ml-[50%] gap-1 overflow-x-auto scrollbar-hide h-[15%] z-50 absolute bottom-28 bg-transparent">
        {movieList.map((movie) => (
          <div
            onClick={() => handleClick(movie)}
            key={movie.id}
            className="w-[80px] hover:scale-90 transition ease-in-out duration-200 cursor-pointer h-full"
          >
            <TrailerCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListOfTrailer;
