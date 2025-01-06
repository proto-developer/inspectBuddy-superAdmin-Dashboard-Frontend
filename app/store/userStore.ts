import { create } from "zustand";
import { UserStoreTypes } from "../types/globalStore";

export const useUserStore = create<UserStoreTypes>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (value: boolean) => set(() => ({ isLoggedIn: value })),
  userData: {},
  setUserData: (value: Record<string, unknown>) =>
    set(() => ({ userData: value })),
}));
