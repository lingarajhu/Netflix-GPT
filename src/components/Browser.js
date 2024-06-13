import React from "react";
import Header from "./Header";
import useNowPlayingMovieList from "../hooks/useNowPlayingMovieList";
import MainMovieContainer from "./MainMovieContainer";
import ListOfMovieContainer from "./ListOfMovieContainer";

const Browser = () => {
  useNowPlayingMovieList();

  return (
    <div className="relative">
      <Header />
      <MainMovieContainer />
      <ListOfMovieContainer />
    </div>
  );
};

export default Browser;
