// Type for User Store
export type LoaderStoreTypes = {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
};

// Type for User Store
export type UserStoreTypes = {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  userData: {
    email: string;
    fullname: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    profilePicture: {
      url: string;
      _id: string;
    };
  };
  setUserData: (value: UserStoreTypes["userData"]) => void;
};
