"use client";
import { LoginFormType, LoginResponse } from "@/app/types/auth";
import { useForm } from "@mantine/form";
import React, { useEffect } from "react";
import AuthFormHeader from "./AuthFormHeader";
import { Loader, PasswordInput, TextInput } from "@mantine/core";
import CustomButton from "./../ui/CustomButton";
import { loginUser } from "@/app/api/auth";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useUserStore } from "@/app/store/userStore";
import { useLoaderStore } from "@/app/store/loaderStore";

const LoginForm = () => {
  const router = useRouter();
  const setUserData = useUserStore((state) => state.setUserData);
  const setIsLoggedIn = useUserStore((state) => state.setIsLoggedIn);
  const setIsLoading = useLoaderStore((state) => state.setIsLoading);

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

  const loginMutation = useMutation<LoginResponse, Error, LoginFormType>({
    mutationKey: ["login-user"],
    mutationFn: (formValues) => {
      setIsLoading(true);
      return loginUser(formValues);
    },

    onSuccess: (response) => {
      if (response.success) {
        setUserData(response.data);
        setIsLoggedIn(true);
        router.replace("/dashboard"); // Navigate to the dashboard
        toast.success("Login", {
          description: `Welcome back to InspectBuddy!`,
          duration: 3000,
        });
      } else {
        toast.error("Login Failed!", {
          description: response.error?.message || `Unknown error occurred.`,
          duration: 3000,
        });
      }
      setTimeout(() => setIsLoading(false), 300);
    },
    onError: () => {
      setIsLoading(false);
      toast.error("Login Failed!", {
        description: "An error occurred during login.",
        duration: 3000,
      }); // Stop the loader on error
    },
  });

  return (
    <div className="w-[352px] h-fit py-[32px]">
      <AuthFormHeader
        title="Welcome back"
        description="Welcome back! Please enter your details."
      />
      <form
        onSubmit={loginForm.onSubmit((values) => loginMutation.mutate(values))}
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
