import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTVShows } from "../utils/movieSlice";

const useTVShows = () => {
  const dispatch = useDispatch();
  const fetchTVShowData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/week",
      options
    );
    const json = await data.json();
    dispatch(addTVShows(json?.results));
  };

  useEffect(() => {
    fetchTVShowData();
  }, []);
};

export default useTVShows;
