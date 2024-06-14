import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpComing } from "../utils/movieSlice";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const fetchUpComingMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      options
    );
    const json = await data.json();
    console.log(json);
    dispatch(addUpComing(json?.results));
  };

  useEffect(() => {
    fetchUpComingMoviesData();
  }, []);
};

export default useUpComingMovies;
