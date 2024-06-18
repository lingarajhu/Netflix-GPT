import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setTrailerId } from "../utils/movieSlice";

const usePlayVideoBackground = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchVideoData();
  }, [movieId]);

  const fetchVideoData = async () => {
    const videoData = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      options
    );
    const json = await videoData.json();
    const filterTrailers = json?.results?.filter(
      (list) => list.type === "Trailer"
    );
    const trailer = filterTrailers.length
      ? filterTrailers[0]
      : json?.results[0];
    dispatch(setTrailerId(trailer?.key));
  };
};

export default usePlayVideoBackground;
