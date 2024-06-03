import React from "react";
import { Card, Form } from "react-bootstrap";

const SignInForm = (props) => {
  const handleClick = () => {
    props.setLogInForm();
  };

  return (
    <div className="w-4/12 top-56 mx-auto right-0 left-0 bg-transparent absolute">
      <Card className="bg-black bg-opacity-50 text-white">
        <Card.Body>
          <h2 className="text-center mb-4 text-3xl font-bold">
            {props.logInForm ? "Sign In" : "Sign Up"}
          </h2>
          <Form>
            {!props.logInForm && (
              <Form.Group id="full-name">
                <Form.Control type="text" required placeholder="Full name" />
              </Form.Group>
            )}
            <Form.Group id="email">
              <Form.Control
                className="bg-gray-600 my-4"
                type="email"
                required
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Control type="password" required placeholder="password" />
            </Form.Group>
            <button
              className="w-100 my-4 mb-1 p-2 bg-red-600 rounded-md"
              type="submit"
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
