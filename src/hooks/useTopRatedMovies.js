import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRated } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRated = useSelector((store) => store.movieData.topRated);
  const fetchTopRatedMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      options
    );
    const json = await data.json();
    dispatch(addTopRated(json?.results));
  };

  useEffect(() => {
    !topRated && fetchTopRatedMoviesData();
  }, []);
};

export default useTopRatedMovies;
