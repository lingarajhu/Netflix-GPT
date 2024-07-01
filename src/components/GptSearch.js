import React, { useRef } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import lang from "../utils/languageConstants";
import groq from "../utils/groq";
import { options } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";

const GptSearch = () => {
  const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
  const langKey = useSelector((store) => store.config?.lang);
  const searchName = useRef(null);
  const dispatch = useDispatch();

  const searchMoviesTMDB = async (movie) => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await movieData.json();
    return json.results;
  };

  const handleGPTSearch = async () => {
    const gptPromt =
      "Suggest some movies for the query " +
      searchName.current.value +
      ". only give me names of 10 movies, comma seoerated like the Example results given ahead. Example results: [IronMan, Goolmal, Hitman, Thor, King kong] in array fromate. Keep in mind results must look like Example results noting more than that.";

    const gptResults = await groq.chat.completions.create({
      messages: [{ role: "user", content: gptPromt }],
      model: "llama3-8b-8192",
    });

    const gptMovies = gptResults?.choices[0]?.message?.content.split("\n\n");
    const gptMoviesV1 = gptMovies[1];
    const gptMoviesV2 = gptMoviesV1.split(", ");
    const promiseData = gptMoviesV2.map((movie) => searchMoviesTMDB(movie));

    const resolvedTMDBData = await Promise.all(promiseData);
    dispatch(
      addGptMovies({ movieNames: gptMoviesV2, movieResults: resolvedTMDBData })
    );
  };

  return (
    <div>
      <div className="w-6/12 absolute mr-14 top-24 right-0 rounded-lg">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid grid-cols-11"
        >
          <input
            className="py-3 px-3 col-span-8 bg-black/85 text-white rounded-tl-full rounded-bl-full"
            type="text"
            ref={searchName}
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button
            onClick={handleGPTSearch}
            className="py-2 px-3 bg-red-700 rounded-tr-full rounded-br-full col-span-3 text-white font-semibold"
          >
            {lang[langKey].search} {searchIcon}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearch;
