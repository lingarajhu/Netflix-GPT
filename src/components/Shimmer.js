import React from "react";

const Shimmer = () => {
  return (
    <div className="h-screen w-screen">
      <div className="w-screen h-[70%] bg-black/45 rounded-md"></div>
      <div className="grid gap-3">
        <div className="relative my-5 rounded-md w-[300px] h-[200px] bg-black/45"></div>
        <div className="relative my-5 rounded-md w-[300px] h-[200px] bg-black/45"></div>
        <div className="relative my-5 rounded-md w-[300px] h-[200px] bg-black/45"></div>
        <div className="relative my-5 rounded-md w-[300px] h-[200px] bg-black/45"></div>
      </div>
    </div>
  );
};

export default Shimmer;
