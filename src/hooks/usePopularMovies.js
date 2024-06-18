import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopular } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popular = useSelector((store) => store.movieData.popular);
  const fetchPopularMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      options
    );
    const json = await data.json();
    dispatch(addPopular(json?.results));
  };

  useEffect(() => {
    !popular && fetchPopularMoviesData();
  }, []);
};

export default usePopularMovies;
