import React from "react";
import Header from "./Header";
import MainMovieContainer from "./MainMovieContainer";
import ListOfMovieContainer from "./ListOfMovieContainer";

const Browser = () => {
  return (
    <div className="relative">
      <Header />
      <MainMovieContainer />
      <ListOfMovieContainer />
    </div>
  );
};

export default Browser;
