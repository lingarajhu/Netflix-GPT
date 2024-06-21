import React from "react";
import { media } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handelClickV1 = () => {
    navigate("/aboutUs");
  };

  return (
    <div className="bg-black/90 text-gray-400 text-3xl p-6 relative w-screen h-64">
      <div className="p-3">
        <h1 className="font-bold text-5xl text-red-700 ">Follow us on</h1>
        <div className="flex gap-56 items-center">
          <div className="text-red-600 px-3 flex gap-3 my-4">
            {media.map((flatform) => (
              <a className="text-red-600" href={flatform.link}>
                {flatform.icon}
              </a>
            ))}
          </div>
          <div>
            <ul className="flex gap-4 text-lg cursor-pointer">
              <li
                onClick={handelClickV1}
                className="hover:text-white hover:border-b"
              >
                About Us
              </li>

              <li className="hover:text-white hover:border-b">Contact Us</li>
              <li className="hover:text-white hover:border-b">
                Customer Support
              </li>
              <li className="hover:text-white hover:border-b">Legal</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
