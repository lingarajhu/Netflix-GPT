import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearch = () => {
  const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
  const langKey = useSelector((store) => store.config?.lang);

  return (
    <div>
      <div className="w-5/12 absolute top-24 left-0 right-0 mx-auto bg-black rounded-lg">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid grid-cols-11"
        >
          <input
            className="py-2 px-3 col-span-8 bg-gray-800/60 text-white rounded-tl-md rounded-bl-md"
            type="text"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button className="py-2 px-3 bg-red-700 rounded-tr-md rounded-br-md col-span-3 text-white font-semibold">
            {lang[langKey].search} {searchIcon}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearch;
