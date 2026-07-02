import React from "react";
import Input from "./Input";
import Button from "./Button";

import { useRef, useEffect } from "react";
import Login from "./Login";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const baseUrl = import.meta.env.VITE_BASE_URL;

  let navigate = useNavigate();

  console.log(baseUrl);

  async function handleSubmit(e) {
    e.preventDefault();

    const loginObj = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const response = await fetch(`${baseUrl}auth/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginObj),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login xato");
      }

      // Tokenni saqlash (agar API qaytarsa)
      // localStorage.setItem("access", data.access);
      // localStorage.setItem("refresh", data.refresh);
      localStorage.setItem("access", data.data.access);
      localStorage.setItem("refresh", data.data.refresh);

      navigate("/admin");
    } catch (error) {
      toast(error.message);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-gray-400 flex flex-col gap-4 px-8 py-6 rounded-2xl"
    >
      <div>
        <h1 className="font-extrabold mb-2 text-3xl">Welcome Back</h1>
        <p className="mb-2 text-gray-400 text-[20px]">
          Enter your credentials to access your account
        </p>
      </div>

      <Input
        ref={emailRef}
        type={"email"}
        label={"Email"}
        placeholder={"name@gmail.com"}
      />
      <Input
        ref={passwordRef}
        type={"password"}
        label={"Password"}
        placeholder={"******"}
      />

      <Button variant="primary" text={"Login"} />
    </form>
  );
}

export default LoginForm;
