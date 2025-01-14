import axios from "axios";
import { AllUsersFiltersTypes } from "../types/allUsers";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// API to fetch all Users
export const fetchAllUsers = async ({
  page,
  search,
  subscriptionPlan,
}: AllUsersFiltersTypes) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/admin/getAllUsers?page=${page}&limit=10&search=${search}&filter=${subscriptionPlan}`,
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error: any) {
    console.error("Failed to fetch users:", error);
    throw new Error(
      error.response?.data?.message || "An unexpected error occurred"
    );
  }
};
