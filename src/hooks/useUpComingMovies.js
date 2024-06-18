import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpComing } from "../utils/movieSlice";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upComing = useSelector((store) => store.movieData.upComing);
  const fetchUpComingMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      options
    );
    const json = await data.json();
    dispatch(addUpComing(json?.results));
  };

  useEffect(() => {
    !upComing && fetchUpComingMoviesData();
  }, []);
};

export default useUpComingMovies;
