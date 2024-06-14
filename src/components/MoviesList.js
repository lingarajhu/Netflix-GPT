import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, streamingList }) => {
  // const firstCard = streamingList[0];
  if (!streamingList) return;
  return (
    <div className="mt-2">
      <div>
        <h2 className="mb-1 text-white sticky">{title}</h2>
        {streamingList && (
          <div className="flex gap-4 overflow-x-auto scrollbar-hide">
            {streamingList?.map((movie) => (
              <div className="my-2">
                <MovieCard
                  key={movie.id}
                  poster_path={movie?.backdrop_path}
                  title={movie?.title}
                  imdbRating={movie?.vote_average}
                  currentMovie={movie}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviesList;
