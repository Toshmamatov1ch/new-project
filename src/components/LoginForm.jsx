import React, { useRef } from "react";
import Input from "./Input";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginForm() {
  const formRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const baseUrl = import.meta.env.VITE_BASE_URL;
  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const loginObj = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
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

      localStorage.setItem("access", data.data.access);
      localStorage.setItem("refresh", data.data.refresh);

      toast.success("Muvaffaqiyatli tizimga kirdingiz!");

      // Login muvaffaqiyatli bo'lsa formani tozalash
      if (formRef.current) {
        formRef.current.reset();
      }

      navigate("/admin");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="border border-gray-400 flex flex-col gap-4 px-8 py-6 rounded-2xl max-w-md mx-auto"
      autoComplete="off" // Form darajasida keshni o'chirish
    >
      <div>
        <h1 className="font-extrabold mb-2 text-3xl text-left">Welcome Back</h1>
        <p className="mb-2 text-gray-400 text-[16px] text-left">
          Enter your credentials to access your account
        </p>
      </div>

      <Input
        ref={emailRef}
        label="Email"
        type="email"
        placeholder="name@example.com"
        required
        autoComplete="off" // Brauzer emailni eslab qolmasligi uchun
      />

      <Input
        ref={passwordRef}
        label="Password"
        type="password"
        placeholder="••••••••"
        required
        autoComplete="new-password" // Brauzer parolni eslab qolmasligi uchun eng ishonchli yo'l
      />

      <Button variant="primary" text={"Login"} type="submit" />
    </form>
  );
}

export default LoginForm;
