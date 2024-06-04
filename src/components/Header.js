import React, { useState } from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const [showSignOut, setShowSignOut] = useState(true);

  const handleClick = () => {
    setShowSignOut(!showSignOut);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="w-full absolute flex items-center justify-between bg-gradient-to-b from-black p-7 px-24">
      <div>
        <img
          className="w-40 bg-opacity-0"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo-img"
        />
      </div>
      <div className="flex gap-7">
        <select
          className="p-1 bg-transparent text-white text-lg w-24 border rounded-md"
          name="lang"
          id="lang"
        >
          <option className="text-black" value={"English"}>
            English
          </option>
          <option className="text-black" value={"हिन्दी"}>
            हिन्दी
          </option>
        </select>
        {user && (
          <div className="relative flex items-center font-bold text-3xl">
            <img
              className="w-9 h-9 mr-3 rounded-md"
              src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
              alt="user-icon"
            />
            <span
              onClick={handleClick}
              className="mr-2 cursor-pointer transition ease-in-out duration-200"
            >
              {showSignOut ? "🔻" : "🔺"}
            </span>
            {!showSignOut && (
              <div className="bg-zinc-600 origin-top duration-200 bg-opacity-30 flex flex-col p-2 absolute left-10 top-8 w-24 text-center rounded-md">
                <span className="font-bold hover:shadow-xl duration-200 text-base text-white">
                  {user.displayName}
                </span>
                {user && (
                  <span
                    onClick={handleSignOut}
                    className="font-bold text-base text-red-600 hover:shadow-xl duration-200 cursor-pointer"
                  >
                    Sign out
                  </span>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
