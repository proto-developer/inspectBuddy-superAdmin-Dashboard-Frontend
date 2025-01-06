import axios from "axios";
import { LoginFormType } from "../types/auth";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL; // Ensure the variable is prefixed with NEXT_PUBLIC if it's used on the client side.

export const loginUser = async ({ email, password }: LoginFormType) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password,
      deviceType: "web",
    });

    return {
      success: true,
      data: response.data?.userData || null, // Ensure response data exists before accessing `userData`.
    };
  } catch (error: any) {
    console.error("Failed to log in:", error);

    return {
      success: false,
      error:
        error.response?.data?.message ||
        "An unexpected error occurred while logging in.", // Provide a clear fallback message.
    };
  }
};
