import React from "react";
import usePlayVideoBackground from "../hooks/usePlayVideoBackground";
import { useSelector } from "react-redux";

const BackgroundVideoPlay = ({ movieId }) => {
  usePlayVideoBackground(movieId);
  const trailerId = useSelector((store) => store.movieDate?.trailerId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube-nocookie.com/embed/L4DrolmDxmw?si=" +
          trailerId +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default BackgroundVideoPlay;
