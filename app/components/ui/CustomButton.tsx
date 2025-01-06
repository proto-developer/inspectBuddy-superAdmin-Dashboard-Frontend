import React from "react";

type CustomButtonProps = {
  id?: string;
  label: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  buttonType?: "contained" | "outlined";
  buttonColor?: string;
  borderColor?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  id,
  label,
  type = "button",
  onClick,
  disabled = false,
  className = "",
  buttonType = "contained",
  buttonColor = "#2A85FF",
  borderColor = "#2A85FF",
}) => {
  return (
    <button
      id={id || undefined} // `undefined` prevents invalid `null` assignment.
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`px-[24px] py-[12px] h-[48px] rounded-[8px] flex items-center justify-center sm:text-[16px] text-[14px] ${className}`}
      style={{
        backgroundColor:
          buttonType === "contained" && disabled ? "#CBCBCB" : buttonColor,
        color: buttonType === "contained" ? "#FFFFFF" : "#2A85FF",
        borderWidth: buttonType === "outlined" ? "2px" : "0px",
        borderColor:
          buttonType === "outlined" && disabled ? "#CBCBCB" : borderColor,
      }}
    >
      {label}
    </button>
  );
};

export default CustomButton;
