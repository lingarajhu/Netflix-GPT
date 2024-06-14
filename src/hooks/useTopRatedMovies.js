import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRated } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const fetchTopRatedMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      options
    );
    const json = await data.json();
    console.log(json);
    dispatch(addTopRated(json?.results));
  };

  useEffect(() => {
    fetchTopRatedMoviesData();
  }, []);
};

export default useTopRatedMovies;
