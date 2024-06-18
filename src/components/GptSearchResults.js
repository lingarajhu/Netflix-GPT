import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptSearchResults = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gptData);

  if (!movieNames) return;

  return (
    <div className="absolute py-2 w-11/12 px-3 top-40 left-0 right-0 mx-auto bg-black/80 rounded-md">
      <div>
        {movieNames.map((movieName, index) => (
          <MoviesList
            key={movieName}
            title={movieName}
            streamingList={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptSearchResults;
