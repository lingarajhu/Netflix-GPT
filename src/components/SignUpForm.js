import React from "react";

const SignUpForm = () => {
  return (
    <div className="absolute text-center top-64 text-white p-2 mx-auto right-0 left-0">
      <h1 className=" text-5xl font-extrabold my-3">
        Unlimited movies, TV shows and more
      </h1>
      <h2 className="my-2">Watch anywhere. Cancel anytime.</h2>
      <h3 className="my-2">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="my-2">
        <label className="relative">
          <input
            className="py-3 px-2 rounded-md w-96 outline-none bg-neutral-800 bg-opacity-70 border-2 focus:border-green-500 transition duration-200"
            type="email"
            placeholder="Email address"
          />
        </label>
        <button className="ml-4 bg-red-600 p-3 rounded-md font-bold text-base">
          Get Started {">"}
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
