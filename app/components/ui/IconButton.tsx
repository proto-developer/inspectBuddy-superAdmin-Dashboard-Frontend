import { cn } from "@/app/utils/cn";

type IconButtonProps = {
  id?: string;
  label?: string;
  type?: "submit" | "button";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  buttonType?: "contained" | "outlined";
  buttonColor?: string;
  borderColor?: string;
  icon?: React.ReactNode;
};

const hexToRgba = (hex: string): string => {
  const match = hex.replace(/^#/, "").match(/.{2}/g);

  if (!match) {
    throw new Error("Invalid hex color format");
  }

  const [r, g, b] = match.map((x) => parseInt(x, 16));
  return `rgba(${r}, ${g}, ${b}, 0.5)`;
};

const IconButton = ({
  id,
  label,
  type = "button",
  onClick,
  disabled,
  className,
  buttonType,
  buttonColor,
  borderColor,
  icon,
}: IconButtonProps) => {
  // Determine styles based on conditions
  const isLabelProvided = !!label;

  const styles = {
    backgroundColor:
      buttonType === "contained"
        ? buttonColor || (isLabelProvided ? "#2A85FF" : "transparent")
        : buttonType === "outlined"
        ? "transparent"
        : "transparent",
    color:
      buttonType === "contained"
        ? "#FFFFFF"
        : buttonType === "outlined" && borderColor
        ? borderColor
        : isLabelProvided
        ? "#000"
        : "inherit",
    borderColor:
      buttonType === "outlined" && borderColor
        ? hexToRgba(borderColor)
        : "transparent",
  };

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "h-[48px] flex items-center justify-center rounded-[8px] gap-[8px] disabled:bg-[#CBCBCB]",
        {
          "p-[0px] bg-transparent border-none": !isLabelProvided, // No padding or background for icon-only button
          "p-[10px_8px]": isLabelProvided, // Add padding when label is present
          "border-[0px] text-white": buttonType === "contained",
          "!bg-transparent border-[1.5px]":
            buttonType === "outlined" && borderColor,
        },
        className
      )}
      style={styles}
    >
      {icon}
      {isLabelProvided && <p className="sm:text-[16px] text-[14px]">{label}</p>}
    </button>
  );
};

export default IconButton;
