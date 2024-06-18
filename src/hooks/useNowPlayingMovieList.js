import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlaying, nowFeaturingMovie } from "../utils/movieSlice";

const useNowPlayingMovieList = () => {
  const dispatch = useDispatch();
  const nowMoviePlaying = useSelector(
    (store) => store.movieData.nowMoviePlaying
  );
  useEffect(() => {
    !nowMoviePlaying && fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(addNowPlaying(json?.results));
    dispatch(nowFeaturingMovie(json?.results[4]));
  };
};

export default useNowPlayingMovieList;
