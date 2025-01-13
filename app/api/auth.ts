import axios from "axios";
import { LoginFormType } from "../types/auth";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const loginUser = async ({ email, password }: LoginFormType) => {
  try {
    const response = await axios.post(`${BASE_URL}/admin/login`, {
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

export const checkAuthStatus = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/status`, {
      withCredentials: true,
    });

    return {
      success: true,
      data: response.data, // Ensure response data exists before accessing `userData`.
    };
  } catch (error: any) {
    console.error("Authentication check failed:", error);

    // Extract a more user-friendly error message if available
    const errorMessage =
      error.response?.data?.message || "An unexpected error occurred.";

    // Return the error with a consistent structure
    return {
      success: false,
      message: errorMessage,
    };
  }
};
