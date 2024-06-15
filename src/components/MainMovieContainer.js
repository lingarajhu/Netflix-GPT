import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import BackgroundVideoPlay from "./BackgroundVideoPlay";
import ListOfTrailer from "./ListOfTrailer";
import useNowPlayingMovieList from "../hooks/useNowPlayingMovieList";

const MainMovieContainer = () => {
  useNowPlayingMovieList();
  const moviesData = useSelector((store) => store.movieData?.nowMoviePlaying);
  const featuringMovie = useSelector(
    (store) => store?.movieData?.featuringMovie
  );
  const featureClidckedMovie = useSelector(
    (store) => store?.movieData?.featureClidckedMovie
  );

  if (!moviesData) return;

  function currentMovieFeaturing() {
    return !featureClidckedMovie ? featuringMovie : featureClidckedMovie;
  }

  const firstPlayingMovie = currentMovieFeaturing();

  const { original_title, overview, id } = firstPlayingMovie;

  return (
    featuringMovie.length !== 0 && (
      <div className="relative">
        <ListOfTrailer movieList={moviesData} />
        <VideoTitle title={original_title} overview={overview} />
        <BackgroundVideoPlay movieId={id} />
      </div>
    )
  );
};

export default MainMovieContainer;
