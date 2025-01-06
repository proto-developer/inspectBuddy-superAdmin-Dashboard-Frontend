import { AuthHeaderProps } from "@/app/types/auth";

const AuthFormHeader = ({ title, description }: AuthHeaderProps) => {
  return (
    <div className="sm:text-start text-center">
      <h1 className="font-bold sm:text-[32px] text-[24px] text-darkBlue">
        {title}
      </h1>
      <span className="text-[14px] text-[#808494] font-medium">
        {description}
      </span>
    </div>
  );
};

export default AuthFormHeader;
