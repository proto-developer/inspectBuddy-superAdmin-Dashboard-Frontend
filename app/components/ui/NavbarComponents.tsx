"use client";
import { useAdminNavbarTitle } from "@/app/hooks/useAdminNavbarTitle";
import { useEffect } from "react";
import { Menu } from "@mantine/core";

export const NavbarRoot = ({ children }: { children: React.ReactNode }) => {
  const { pageTitle, pagePath } = useAdminNavbarTitle();

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
    <nav
      className={`md:h-[96px] h-[72px] ${
        customPagesTitles.includes(pageTitle)
          ? "w-[calc(100vw-var(--scrollbar-width))]"
          : "min-[1630px]:w-[calc(100vw-305px-var(--scrollbar-width))] lg:w-[calc(100vw-220px-var(--scrollbar-width))] w-[calc(100vw-var(--scrollbar-width))]"
      } md:px-[32px] px-[20px] flex items-center justify-between bg-white border-b-[1.5px] border-b-[#E4F0FF]`}
    >
      {children}
    </nav>
  );
};

export const SidebarMobileVersion = () => {
  return;
};

export const UserNavMenu = () => {
  return (
    <Menu shadow="md" id="userProfileDropDownNavbar">
      <Menu.Target>
        <button className="sm:px-[12px] px-[8px] sm:h-[48px] h-[40px] rounded-[8px] border-[1.5px] border-[#CCE2FF] flex items-center justify-center gap-[8px]">
          <img
            src={
              user?.profilePicture.url === ""
                ? avatarIcon
                : user?.profilePicture.url
            }
            alt="profile-icon"
            className="w-[32px] h-[32px] rounded-full"
          />
          <span className="font-medium text-[16px] text-darkBlue sm:block hidden">
            {/* Show first name of user name */}
            {user?.fullname?.split(" ")[0]}
          </span>
          <img src={arrowDownIcon} alt="arrowDown-icon" />
        </button>
      </Menu.Target>
      <Menu.Dropdown>
        <Link to="/settings/profile-settings">
          <Menu.Item
            leftSection={
              <img
                src={settingsIcon}
                alt="settings-icon"
                style={{ width: 20, height: 20 }}
              />
            }
          >
            Settings
          </Menu.Item>
        </Link>

        <Menu.Divider />

        <Menu.Item
          leftSection={
            <img
              src={logoutIcon}
              alt="trash-icon"
              style={{ width: 20, height: 20 }}
            />
          }
          onClick={logout}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
