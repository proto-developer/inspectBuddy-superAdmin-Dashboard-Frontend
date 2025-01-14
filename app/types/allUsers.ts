export type AllUsersFiltersTypes = {
  page: number;
  search: string;
  subscriptionPlan: string;
};

export type SingleUserType = {
  _id: string;
  businessAddress: string;
  businessLogo: {
    publicId: string;
    url: string;
  };
  businessName: string;
  businessPhoneNumber: string;
  businessWebsite?: string; // Optional since it might be null
  changePasswordEligible: boolean;
  createdAt: string; // Date string
  email: string;
  fullname: string;
  otpVerified: boolean;
  pdfIntro?: string; // Optional field
  pdfOutro?: string; // Optional field
  personalPhoneNumber: string;
  profilePicture: {
    publicId: string;
    url: string;
  };
  propertyCategories: {
    _id: string;
    value: string;
    iconId: string;
  }[];
  role: string;
  signupType: string;
  updatedAt: string; // Date string
};
