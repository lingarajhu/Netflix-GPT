import React, { useState } from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import useTVShows from "../hooks/useTVShows";
import useTopRatedShow from "../hooks/useTopRatedShow";

const ListOfMovieContainer = () => {
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  useTVShows();
  useTopRatedShow();

  const movieList = useSelector((store) => store?.movieData?.nowMoviePlaying);
  const popularMovies = useSelector((store) => store?.movieData?.popular);
  const topRatedMovies = useSelector((store) => store?.movieData?.topRated);
  const upComingMovies = useSelector((store) => store?.movieData?.upComing);
  const watchList = useSelector((store) => store?.movieData?.watchList);
  const tvShows = useSelector((store) => store?.movieData?.tvShows);
  const topRatedShows = useSelector((store) => store?.movieData?.topRatedShows);
  const isWatchList = useSelector((store) => store?.movieData?.isWatchList);

  return (
    <div className="pl-9 pr-2 bg-black/95  ">
      {movieList &&
        popularMovies &&
        topRatedMovies &&
        upComingMovies &&
        tvShows &&
        topRatedShows && (
          <div className="-mt-[50px] relative z-40">
            {isWatchList && (
              <MoviesList title={"WatchList"} streamingList={watchList} />
            )}
            <MoviesList title={"Now Streaming"} streamingList={movieList} />
            <MoviesList title={"Top Rated"} streamingList={topRatedMovies} />
            <MoviesList title={"Upcomming"} streamingList={upComingMovies} />
            <MoviesList title={"Popular"} streamingList={popularMovies} />
            <MoviesList title={"TV Shows"} streamingList={tvShows} />
            <MoviesList
              title={"Top Rated Shows"}
              streamingList={topRatedShows}
            />
          </div>
        )}
    </div>
  );
};

export default ListOfMovieContainer;
