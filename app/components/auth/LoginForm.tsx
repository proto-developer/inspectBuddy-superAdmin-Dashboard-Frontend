"use client";
import { LoginFormType } from "@/app/types/auth";
import { useForm } from "@mantine/form";
import React from "react";
import AuthFormHeader from "./AuthFormHeader";
import { PasswordInput, TextInput } from "@mantine/core";
import CustomButton from "./../ui/CustomButton";
import { loginUser } from "@/app/api/auth";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  const loginForm = useForm<LoginFormType>({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid Email Address!",
      password: (value) =>
        value.length >= 4 ? null : "Password must be at least 4 characters.",
    },
  });

  const handleFormSubmit = async () => {
    const formData = loginForm.getValues();

    const response = await loginUser(formData);

    if (response.success) {
      return router.replace("/dashboard");
    }

    console.error("Login failed:", response.error);
  };

  return (
    <div className="w-[352px] h-fit py-[32px]">
      <AuthFormHeader
        title="Welcome back"
        description="Welcome back! Please enter your details."
      />
      <form
        onSubmit={loginForm.onSubmit(handleFormSubmit)}
        className="mt-[32px] flex flex-col gap-[16px]"
      >
        <TextInput
          label="Email"
          placeholder="hi@example.com"
          {...loginForm.getInputProps("email")}
          className="w-full font-medium"
        />
        <PasswordInput
          label="Password"
          placeholder="Enter password"
          {...loginForm.getInputProps("password")}
          className="w-full font-medium"
        />
        <CustomButton
          id="login-button"
          label="Login"
          disabled={
            loginForm.getValues().email === "" ||
            loginForm.getValues().password === ""
          }
          type="submit"
          className="w-full text-[16px] font-bold mt-[16px]"
          buttonType="contained"
          buttonColor="#2A85FF"
        />
      </form>
    </div>
  );
};

export default LoginForm;
