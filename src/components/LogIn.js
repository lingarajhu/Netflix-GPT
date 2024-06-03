import React, { useState } from "react";
import Header from "./Header";
import SignInForm from "./SignInForm";

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
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
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
