import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserStoreTypes } from "../types/globalStore";

export const useUserStore = create<UserStoreTypes>()(
  persist(
    (set) => ({
      // user's login status
      isLoggedIn: false,
      setIsLoggedIn: (value: boolean) => set(() => ({ isLoggedIn: value })),
      // user's own data
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

      // all the users registered on the platform
      customersData: {},
      setCustomersData: (value: UserStoreTypes["customersData"]) =>
        set(() => ({ customersData: value })),
    }),
    {
      name: "user-storage",
    }
  )
);
