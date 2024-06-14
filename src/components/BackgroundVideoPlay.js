import React from "react";
import usePlayVideoBackground from "../hooks/usePlayVideoBackground";
import { useSelector } from "react-redux";

const BackgroundVideoPlay = ({ movieId }) => {
  usePlayVideoBackground(movieId);
  const trailerId = useSelector((store) => store.movieData?.trailerId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube-nocookie.com/embed/" +
          trailerId +
          "?loop=1&autoplay=1&mute=1&playlist=" +
          trailerId
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BackgroundVideoPlay;
