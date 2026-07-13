import React from "react";
import { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const { register, handleSubmit } = useForm();

  const signUp = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser(data);
        if (userData) {
          dispatch(login({ userData }));
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
      console.log(error.message);
      console.log(error.code);
      console.log(error.type);

      setError(error.message);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <div
          className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
        >
          <div className="mb-2 flex justify-center">
            <span className="inline-block w-full max-w-25">
              <Logo width="100%" />
            </span>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight">
            Sign up to create account
          </h2>
          <p className="mt-2 text-center text-base text-black/60">
            Already have an account?&nbsp;
            <Link
              to="/login"
              className="font-medium text-primary transition-all duration-200 hover:underline"
            >
              Sign In
            </Link>
          </p>
          {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
          <form onSubmit={handleSubmit(signUp)}>
            <div className="space-y-5">
              <Input
                label="Full name: "
                placeholder="Enter your Full name"
                {...register("name", {
                  required: true,
                })}
              />
              <Input
                label="Email:"
                placeholder="Enter your Email"
                type="email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPattern: (value) =>
                      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                      "Email address must be vaild address",
                  },
                })}
              />
              <Input
                label="Password: "
                type="password"
                placeholder="Enter Password here"
                {...register("password", {
                  required: true,
                })}
              />
            </div>
            <Button
              children="Create Account"
              type="submit"
              className="w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
