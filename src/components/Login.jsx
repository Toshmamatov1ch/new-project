import React from "react";

import { Link } from "react-router-dom";

import LoginImage from "../assets/images/login-image.png";

import Logo from "../assets/icons/Link.svg";
import { FaArrowLeft } from "react-icons/fa6";
import Input from "./Input";
import Button from "./Button";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <section>
      <div className="flex">
        <div className=" w-full h-screen px-5 md:px-0 md:w-[50%] flex items-center justify-center">
          <div className="w-md ">
            <Link className="mb-8 block" to="/">
              <img src={Logo} alt="" />
            </Link>
            <Link className="flex items-center gap-2 mb-8" to="/">
              <FaArrowLeft />
              Back to Home
            </Link>
            <LoginForm />
          </div>
        </div>
        {/* rasm */}
        <div className="w-[50%] h-screen hidden md:flex flex-col items-center justify-center ">
          <img src={LoginImage} alt="" />
          <h4 className="font-bold text-2xl mb-2">Start Your Journey</h4>
          <p className="text-gray-400">
            Join thousands of creators sharing their stories on Blogify
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
