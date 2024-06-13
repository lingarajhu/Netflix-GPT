import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import BackgroundVideoPlay from "./BackgroundVideoPlay";

const MainMovieContainer = () => {
  const moviesData = useSelector((store) => store.movieData?.nowMoviePlaying);
  if (!moviesData) return;

  const firstPlayingMovie = moviesData[0];
  if (!firstPlayingMovie) return;

  // console.log(firstPlayingMovie);

  const { original_title, overview, id } = firstPlayingMovie;

  return (
    <div className="relative">
      <VideoTitle title={original_title} overview={overview} />
      <BackgroundVideoPlay movieId={id} />
    </div>
  );
};

export default MainMovieContainer;
