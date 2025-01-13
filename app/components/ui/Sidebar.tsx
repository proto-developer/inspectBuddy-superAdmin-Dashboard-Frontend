"use client";
import { SIDEBAR_ITEMS } from "@/app/constants/sidebar";
import { SidebarItemProps } from "@/app/types/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="min-[1630px]:w-[305px] lg:w-[220px] border-r md:h-[calc(100dvh-96px)] h-[calc(100dvh-72px)] relative md:block hidden">
      <div className="lg:p-[24px] py-[16px] px-[12px] space-y-[16px] sticky md:top-[96px] top-[72px] w-full max-w-[305px]">
        {SIDEBAR_ITEMS.map((item, index) => (
          <SideBarItem
            key={index}
            title={item.title}
            Icon={
              <item.Icon
                className={`${
                  pathname === item.link ? "text-primary" : "text-[#8885AA]"
                }`}
              />
            }
            link={item.link}
            activeLink={pathname}
          />
        ))}
      </div>
    </div>
  );
};

const SideBarItem = ({ title, Icon, link, activeLink }: SidebarItemProps) => {
  return (
    <Link
      href={link}
      className={`${
        activeLink === link && "bg-[#E4F0FF]"
      } rounded-[8px] px-[10px] py-[8px] lg:w-full w-fit flex items-center ${
        activeLink !== link && "hover:bg-[#E4F0FF]"
      }`}
    >
      <div className="flex space-x-[12px] items-center">
        {Icon}
        <p
          className={`text-[16px] ${
            activeLink !== link
              ? "font-medium text-[#8885AA]"
              : "font-bold text-primary"
          } lg:block hidden`}
        >
          {title}
        </p>
      </div>
    </Link>
  );
};

export default Sidebar;
