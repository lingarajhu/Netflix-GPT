import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../utils/movieSlice";

const useNowPlayingMovieList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      options
    );
    const json = await data.json();
    dispatch(addNowPlaying(json?.results));
  };
};

export default useNowPlayingMovieList;
