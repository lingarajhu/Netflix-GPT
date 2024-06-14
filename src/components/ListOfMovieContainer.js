import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";

const ListOfMovieContainer = () => {
  const movieList = useSelector((store) => store?.movieData?.nowMoviePlaying);
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  const popularMovies = useSelector((store) => store?.movieData?.popular);
  const topRatedMovies = useSelector((store) => store?.movieData?.topRated);
  const upComingMovies = useSelector((store) => store?.movieData?.upComing);
  const watchList = useSelector((store) => store?.movieData?.watchList);

  return (
    movieList && (
      <div className="pl-9 pr-2 bg-black/95  ">
        <div className="-mt-[160px] relative z-40">
          <MoviesList title={"Now Streaming"} streamingList={movieList} />
          <MoviesList title={"Top Rated"} streamingList={topRatedMovies} />
          <MoviesList title={"Upcomming"} streamingList={upComingMovies} />
          <MoviesList title={"Popular"} streamingList={popularMovies} />
          {watchList && (
            <MoviesList title={"WatchList"} streamingList={watchList} />
          )}
        </div>
      </div>
    )
  );
};

export default ListOfMovieContainer;
