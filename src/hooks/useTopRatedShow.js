import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedShows } from "../utils/movieSlice";

const useTopRatedShow = () => {
  const dispatch = useDispatch();
  const topRatedShow = useSelector((store) => store.movieData.topRatedShows);
  const fetchTopRatedShowData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated",
      options
    );
    const json = await data.json();
    dispatch(addTopRatedShows(json?.results));
  };

  useEffect(() => {
    !topRatedShow && fetchTopRatedShowData();
  }, []);
};

export default useTopRatedShow;
