import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedShows } from "../utils/movieSlice";

const useTopRatedShow = () => {
  const dispatch = useDispatch();
  const fetchTopRatedShowData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated",
      options
    );
    const json = await data.json();
    dispatch(addTopRatedShows(json?.results));
  };

  useEffect(() => {
    fetchTopRatedShowData();
  }, []);
};

export default useTopRatedShow;
