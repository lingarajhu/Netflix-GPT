import React from "react";
import GptSearch from "./GptSearch";
import GptSearchResults from "./GptSearchResults";
import { NETFLIX_IMG } from "../utils/constants";

const GptComopnent = () => {
  return (
    <div>
      <div className="absolute -z-20">
        <img alt="Bg-img" src={NETFLIX_IMG} />
      </div>
      <GptSearch />
      <GptSearchResults />
    </div>
  );
};

export default GptComopnent;
