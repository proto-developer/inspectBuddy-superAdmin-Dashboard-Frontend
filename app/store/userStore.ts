import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserStoreTypes } from "../types/globalStore";

export const useUserStore = create<UserStoreTypes>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      setIsLoggedIn: (value: boolean) => set(() => ({ isLoggedIn: value })),
      userData: {
        email: "",
        fullname: "",
        role: "",
        createdAt: "",
        updatedAt: "",
        profilePicture: {
          url: "",
          _id: "",
        },
      },
      setUserData: (value: UserStoreTypes["userData"]) =>
        set(() => ({ userData: value })),
    }),
    {
      name: "user-storage",
    }
  )
);
