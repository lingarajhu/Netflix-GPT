import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { USER_LOGO } from "../utils/constants";
import { openSearchComponent } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
import { addGptMovies } from "../utils/gptSlice";

const Header = (props) => {
  const user = useSelector((store) => store.user);
  const gptSearchButton = useSelector((store) => store.gptData.searchComponent);
  const navigate = useNavigate();
  const [showSignOut, setShowSignOut] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        //User is signed in
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/Browser");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }

      return () => unsubscribe();
    });
  }, []);

  const handleSearchBtn = () => {
    dispatch(openSearchComponent(!gptSearchButton));
    if (gptSearchButton) {
      dispatch(addGptMovies([]));
    }
  };

  const handleClick = () => {
    setShowSignOut(!showSignOut);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="fixed w-full z-[51] flex items-center justify-between bg-gradient-to-b from-black py-2 px-7">
      <div>
        <img className="w-40 bg-opacity-0" src={USER_LOGO} alt="logo-img" />
      </div>
      <div className="flex gap-7">
        {gptSearchButton && (
          <select
            className="p-1 bg-transparent text-white text-lg w-24 border rounded-md"
            name="lang"
            id="lang"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option
                className="text-black"
                key={lang.identifier}
                value={lang.identifier}
              >
                {lang.name}
              </option>
            ))}
          </select>
        )}
        {user && (
          <div className="relative flex items-center font-bold text-3xl">
            <button
              onClick={handleSearchBtn}
              className="bg-[#D9232E] rounded-md text-white text-base px-3 py-1"
            >
              {!gptSearchButton ? "GPT Search" : "Home"}
            </button>
            <img
              className="w-8 h-8 mx-3 rounded-md"
              src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
              alt="user-icon"
            />
            <span
              onClick={handleClick}
              className="cursor-pointer transition ease-in-out duration-200"
            >
              {showSignOut ? "🔻" : "🔺"}
            </span>
            {!showSignOut && (
              <div className="bg-black/60 origin-top duration-200 bg-opacity-60 flex flex-col p-2 absolute left-32 top-10 text-right rounded-md">
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
