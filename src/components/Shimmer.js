import React from "react";

const Shimmer = () => {
  return (
    <div className="h-screen absolute top-20 z-50 w-screen">
      <div className="w-12/12 right-0 left-0 mx-auto h-[80%] bg-black/85 rounded-md"></div>
      <div className="gap-3 flex px-4 flex-wrap">
        <div className="relative my-3 rounded-md w-[300px] h-[200px] bg-black/85"></div>
        <div className="relative my-3 rounded-md w-[300px] h-[200px] bg-black/85"></div>
        <div className="relative my-3 rounded-md w-[300px] h-[200px] bg-black/85"></div>
        <div className="relative my-3 rounded-md w-[300px] h-[200px] bg-black/85"></div>
        <div className="relative my-3 rounded-md w-[300px] h-[200px] bg-black/85"></div>
        <div className="relative my-3 rounded-md w-[300px] h-[200px] bg-black/85"></div>
        <div className="relative my-3 rounded-md w-[300px] h-[200px] bg-black/85"></div>
        <div className="relative my-3 rounded-md w-[300px] h-[200px] bg-black/85"></div>
      </div>
    </div>
  );
};

export default Shimmer;
