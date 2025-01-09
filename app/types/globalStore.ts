// Type for User Store
export type LoaderStoreTypes = {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
};

// Type for User Store
export type UserStoreTypes = {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  userData: {};
  setUserData: (value: {}) => void;
};
