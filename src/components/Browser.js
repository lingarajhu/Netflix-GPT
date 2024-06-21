import React from "react";
import Header from "./Header";
import MainMovieContainer from "./MainMovieContainer";
import ListOfMovieContainer from "./ListOfMovieContainer";
import GptComopnent from "./GptComopnent";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Shimmer from "./Shimmer";

const Browser = () => {
  const gptSearchButton = useSelector((store) => store.gptData.searchComponent);
  const nowMoviePlaying = useSelector(
    (store) => store.movieData.nowMoviePlaying
  );

  return (
    <div className="relative">
      <Header />
      {!nowMoviePlaying && <Shimmer />}
      {gptSearchButton ? (
        <GptComopnent />
      ) : (
        <>
          <MainMovieContainer />
          <ListOfMovieContainer />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Browser;
