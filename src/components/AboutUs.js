import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const handelClick = () => {
    navigate("/Browser");
  };

  return (
    <div className="fixed h-screen bg-black/85 text-white text-base">
      <div className="w-8/12 right-0 left-0 mx-auto my-3 p-3">
        <h1 className="text-4xl font-bold text-red-600">About Us</h1>
        <div className="p-4">
          <p className="text-lg text-slate-400">
            Netflix-GPT is an innovative movie discovery platform that combines
            the best of streaming service interfaces with cutting-edge AI
            technology. Our mission is to enhance your movie exploration
            experience and provide personalized, intelligent insights into the
            world of cinema.
            <br /> Key Features: <br />
            1. Curated Movie Selections: Explore a vast collection of films and
            TV shows, categorized into Popular, Top Rated, Trending, and
            Upcoming selections, ensuring you're always in touch with the pulse
            of entertainment.
            <br /> 2. Trailer Showcase: Get a sneak peek of your potential next
            watch with our integrated trailer feature, allowing you to make
            informed viewing decisions. <br />
            3. AI-Powered Movie Assistant: Leverage the power of our advanced
            GPT integration, powered by Groq LLM technology, to get instant,
            intelligent responses to your movie-related queries.
            <br /> 4. Secure User Experience: Enjoy peace of mind with our
            robust authentication system, ensuring your personal movie
            preferences and interactions are protected. At Netflix-GPT, we're
            passionate about bridging the gap between traditional streaming
            platforms and the future of AI-assisted content discovery. While we
            don't offer movie streaming, we provide an unparalleled platform for
            movie enthusiasts to explore, learn, and engage with the cinematic
            world. Join us in revolutionizing how you discover and interact with
            movies. Netflix-GPT: Where AI meets cinema.
          </p>
        </div>
        <strong
          onClick={handelClick}
          className="text-2xl text-red-700 rounded-md p-1 cursor-pointer hover:border-b-2"
        >
          Home
        </strong>
      </div>
    </div>
  );
};

export default AboutUs;
