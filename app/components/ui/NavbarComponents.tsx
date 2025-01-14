"use client";
import { useAdminNavbarTitle } from "@/app/hooks/useAdminNavbarTitle";
import { useEffect } from "react";
import { Indicator, Menu } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { SidebarMobileVersion } from "./MobileSidebar";
import { useUserStore } from "@/app/store/userStore";

const NavbarLogo = () => {
  return (
    <section className="md:h-[96px] h-[72px] p-[24px] border-r min-[1630px]:w-[305px] lg:w-[220px] bg-white lg:flex hidden items-center">
      <Image
        width={218.46}
        height={48}
        src="/logo.svg"
        alt="inspect-buddy-logo"
      />
    </section>
  );
};

const NavbarLogoIcon = () => {
  return (
    <Link href="/dashboard">
      <Image
        width={48}
        height={48}
        src="/logo-icon.svg"
        alt="inspect-buddy-logo"
      />
    </Link>
  );
};

export const NavbarRoot = ({ children }: { children: React.ReactNode }) => {
  const { pageTitle } = useAdminNavbarTitle();

  useEffect(() => {
    function setScrollbarWidth() {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty(
        "--scrollbar-width",
        `${scrollbarWidth}px`
      );
    }

    window.addEventListener("resize", setScrollbarWidth);
    window.addEventListener("load", setScrollbarWidth); // Use window 'load' event

    // Initial call to set the scrollbar width
    setScrollbarWidth();

    return () => {
      window.removeEventListener("resize", setScrollbarWidth);
      window.removeEventListener("load", setScrollbarWidth);
    };
  }, [pageTitle]);

  const customPagesTitles = ["User's Details"];

  return (
    <nav className="fixed top-0 z-[10] flex items-center">
      {!customPagesTitles.includes(pageTitle) && <NavbarLogo />}
      <section
        className={`md:h-[96px] h-[72px] ${
          customPagesTitles.includes(pageTitle) || !pageTitle
            ? "w-[calc(100vw-var(--scrollbar-width))]"
            : "min-[1630px]:w-[calc(100vw-305px-var(--scrollbar-width))] lg:w-[calc(100vw-220px-var(--scrollbar-width))] w-[calc(100vw-var(--scrollbar-width))]"
        } md:px-[32px] px-[20px] flex items-center justify-between bg-white border-b-[1.5px] border-b-[#E4F0FF]`}
      >
        {children}
      </section>
    </nav>
  );
};

export const NavbarTitleSection = () => {
  const { pageTitle } = useAdminNavbarTitle();

  const customPagesTitles = ["User's Details"];

  return (
    <div className="logoDiv flex items-center gap-[24px]">
      {customPagesTitles.includes(pageTitle) && <SidebarMobileVersion />}

      <div className="flex items-center gap-[12px]">
        {customPagesTitles.includes(pageTitle) && <NavbarLogoIcon />}
        <p className="font-bold xs:text-[24px] text-[20px] text-darkBlue">
          {pageTitle}
        </p>
      </div>
    </div>
  );
};

export const NotificationButton = () => {
  return (
    <button className="bg-[#F3F8FF] rounded-[8px] w-[40px] h-[40px] flex justify-center items-center">
      <Indicator
        inline
        processing
        color="#2A85FF"
        size={12}
        offset={6}
        withBorder
      >
        <Image
          width={24}
          height={24}
          src="/icons/notification.svg"
          alt="notification-icon"
        />
      </Indicator>
    </button>
  );
};

export const UserInfoSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex items-center sm:space-x-[24px] space-x-[16px]">
      {children}
    </div>
  );
};

export const UserNavMenu = () => {
  const userData = useUserStore((state) => state.userData);

  const handleLogout = () => {};

  return (
    <Menu shadow="md" id="userProfileDropDownNavbar">
      <Menu.Target>
        <button className="sm:px-[12px] px-[8px] sm:h-[48px] h-[40px] rounded-[8px] border-[1.5px] border-[#CCE2FF] flex items-center justify-center gap-[8px]">
          <div className="w-[32px] h-[32px] bg-primary rounded-full flex items-center justify-center">
            <p className="text-white text-[16px] font-bold uppercase">
              {userData?.fullname?.split(" ")[0]?.slice(0, 2)}
            </p>
          </div>

          <span className="font-medium text-[16px] text-darkBlue sm:block hidden">
            {/* Show first name of user name */}
            {userData?.fullname?.split(" ")[0]}
          </span>
          <Image
            width={20}
            height={20}
            src="/icons/arrowDown-icon.svg"
            alt="arrowDown-icon"
          />
        </button>
      </Menu.Target>
      <Menu.Dropdown>
        <Link href="/settings/profile-settings">
          <Menu.Item
            leftSection={
              <Image
                width={20}
                height={20}
                src="/icons/settings-icon.svg"
                alt="settings-icon"
              />
            }
          >
            Settings
          </Menu.Item>
        </Link>

        <Menu.Divider />

        <Menu.Item
          leftSection={
            <Image
              width={20}
              height={20}
              src="/icons/logout-icon.svg"
              alt="logout-icon"
            />
          }
          onClick={handleLogout}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
