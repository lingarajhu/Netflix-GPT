import React, { useRef, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { validateEmailAndPassword } from "../utils/validation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const SignInForm = (props) => {
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleBtnClicl = () => {
    const message = validateEmailAndPassword(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    // if email or password is not validated it will return form this function
    if (message) return;

    if (!props.logInForm) {
      // sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/Browser");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/Browser");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleClick = () => {
    props.setLogInForm();
  };

  return (
    <div className="w-3/12 top-56 mx-auto right-0 left-0 bg-transparent absolute">
      <Card className="bg-black bg-opacity-50 text-white">
        <Card.Body>
          <h2 className="text-left mb-4 text-3xl font-bold">
            {props.logInForm ? "Sign In" : "Sign Up"}
          </h2>
          <Form onSubmit={(e) => e.preventDefault()}>
            {!props.logInForm && (
              <Form.Group id="full-name">
                <Form.Control
                  ref={name}
                  type="text"
                  required
                  placeholder="Full Name"
                />
              </Form.Group>
            )}
            <Form.Group id="email">
              <Form.Control
                ref={email}
                className="bg-gray-600 my-4"
                type="email"
                required
                placeholder="Email Address"
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Control
                ref={password}
                type="password"
                required
                placeholder="Password"
              />
            </Form.Group>
            <p className="text-red-600 font-bold my-2 px-2">{errorMessage}</p>
            <button
              className="w-100 my-2 mb-1 p-2 bg-red-600 rounded-md"
              type="submit"
              onClick={handleBtnClicl}
            >
              {props.logInForm ? "Sign In" : "Sign Up"}
            </button>
            <input className="p-3" type="checkbox" />
            <label className="mx-1">Remember me</label>
            <p className="text-center text-lg font-semibold my-2">
              {props.logInForm ? "New to Netflix?" : "Already a User?"}
              <span
                className="cursor-pointer text-red-600 hover:border-b ease-in-out ml-2"
                onClick={handleClick}
              >
                {props.logInForm ? "Sign Up Now" : "Sign In Now"}
              </span>
            </p>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SignInForm;
