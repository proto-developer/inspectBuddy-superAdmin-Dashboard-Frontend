import { create } from "zustand";
import { LoaderStoreTypes } from "../types/globalStore";

export const useLoaderStore = create<LoaderStoreTypes>((set) => ({
  isLoading: false,
  setIsLoading: (value: boolean) => set(() => ({ isLoading: value })),
}));
