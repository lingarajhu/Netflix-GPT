import React, { useState } from "react";
import Header from "./Header";
import SignInForm from "./SignInForm";
import { NETFLIX_IMG } from "../utils/constants";

const LogIn = () => {
  const [logInForm, setLogInForm] = useState(true);

  return (
    <div className="relative bg-gradient-to-t from-black">
      <Header
        logInForm={logInForm}
        setLogInForm={() => setLogInForm((logInForm) => !logInForm)}
      />
      <div className="">
        <img
          className="h-[100vh] w-full mix-blend-normal"
          src={NETFLIX_IMG}
          alt="bg-img"
        />
      </div>
      <SignInForm
        logInForm={logInForm}
        setLogInForm={() => setLogInForm(!logInForm)}
      />
    </div>
  );
};

export default LogIn;
