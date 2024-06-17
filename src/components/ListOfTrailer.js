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
    <div className="overflow-x-auto rounded-md">
      <div className="text-white w-[40%] pl-9 grid grid-flow-col rounded-md gap-1 overflow-y-auto scrollbar-hide h-[15%] z-50 absolute bottom-24 left-[60%] bg-transparent">
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
