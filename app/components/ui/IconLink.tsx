import { cn } from "@/app/utils/cn";
import Link from "next/link";

type IconLinkProps = {
  id?: string;
  label: string;
  href: string;
  className?: string;
  icon: React.ReactNode;
};

const IconLink = ({ id, href, label, icon, className }: IconLinkProps) => {
  return (
    <Link
      href={href}
      id={id}
      className={cn(
        "flex items-center gap-[8px] p-[8px_10px] border-[1.5px] rounded-[8px] border-[#E5E6EB] w-fit",
        className
      )}
    >
      {icon}
      <p className="text-[12px] text-darkBlue font-medium">{label}</p>
    </Link>
  );
};

export default IconLink;
