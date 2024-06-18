import React from "react";
import GptSearch from "./GptSearch";
import GptSearchResults from "./GptSearchResults";
import { NETFLIX_IMG } from "../utils/constants";

const GptComopnent = () => {
  return (
    <div className="">
      <div className="fixed -z-20">
        <img alt="Bg-img" src={NETFLIX_IMG} />
      </div>
      <GptSearch />
      <div className="px-4">
        <GptSearchResults />
      </div>
    </div>
  );
};

export default GptComopnent;
