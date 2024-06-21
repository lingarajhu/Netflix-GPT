import React from "react";
import LogIn from "./LogIn";
import Browser from "./Browser";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./AboutUs";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LogIn />,
    },
    {
      path: "/Browser",
      element: <Browser />,
    },
    {
      path: "/aboutUs",
      element: <AboutUs />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
