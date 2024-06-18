import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTVShows } from "../utils/movieSlice";

const useTVShows = () => {
  const dispatch = useDispatch();
  const tvShows = useSelector((store) => store.movieData.tvShows);
  const fetchTVShowData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/week",
      options
    );
    const json = await data.json();
    dispatch(addTVShows(json?.results));
  };

  useEffect(() => {
    !tvShows && fetchTVShowData();
  }, []);
};

export default useTVShows;
