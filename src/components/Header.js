import React from "react";

const Header = (props) => {
  const handleClick = () => {
    props.setLogInForm();
  };
  return (
    <div className="w-full absolute flex items-center justify-between bg-gradient-to-b from-black p-7 px-36">
      <div>
        <img
          className="w-40 bg-opacity-0"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo-img"
        />
      </div>
      <div className="flex gap-10">
        <select
          className="p-1 bg-transparent text-white text-lg w-28 border rounded-md"
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
        <button
          onClick={handleClick}
          className="p-1 bg-red-600 rounded-md text-white text-lg w-24"
        >
          {props.logInForm ? "Sign Up" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default Header;
