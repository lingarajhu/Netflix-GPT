import React from "react";
import MovieCard from "./MovieCard";
import Shimmer from "./Shimmer";

const MoviesList = ({ title, streamingList }) => {
  if (!streamingList) return;

  return streamingList ? (
    <div className="mt-2">
      <div>
        <h2 className="mb-1 text-white sticky">{title}</h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {streamingList.map((movie) => (
            <div key={movie.id} className="my-2 h-fit">
              <MovieCard
                poster_path={movie?.poster_path}
                title={movie?.title || movie?.name}
                imdbRating={movie?.vote_average}
                currentMovie={movie}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <Shimmer />
  );
};

export default MoviesList;
