export type LoginFormType = {
  email: string;
  password: string;
};

export type AuthHeaderProps = {
  title: string;
  description: string;
};

export type LoginResponse = { success: boolean; data?: any; error?: any };
