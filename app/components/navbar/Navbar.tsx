import {
  NavbarRoot,
  NavbarTitleSection,
  NotificationButton,
  UserInfoSection,
  UserNavMenu,
} from "../ui/NavbarComponents";

const Navbar = () => {
  return (
    <NavbarRoot>
      <NavbarTitleSection />
      <UserInfoSection>
        <NotificationButton />
        <UserNavMenu />
      </UserInfoSection>
    </NavbarRoot>
  );
};

export default Navbar;
