import React from "react";
import Header from "./Header";
import MainMovieContainer from "./MainMovieContainer";
import ListOfMovieContainer from "./ListOfMovieContainer";
import GptComopnent from "./GptComopnent";
import { useSelector } from "react-redux";

const Browser = () => {
  const gptSearchButton = useSelector((store) => store.gptData.searchComponent);

  return (
    <div className="relative">
      <Header />
      {gptSearchButton ? (
        <GptComopnent />
      ) : (
        <>
          <MainMovieContainer />
          <ListOfMovieContainer />
        </>
      )}
    </div>
  );
};

export default Browser;
