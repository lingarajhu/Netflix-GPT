import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopular } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const fetchPopularMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      options
    );
    const json = await data.json();
    console.log(json);
    dispatch(addPopular(json?.results));
  };

  useEffect(() => {
    fetchPopularMoviesData();
  }, []);
};

export default usePopularMovies;
