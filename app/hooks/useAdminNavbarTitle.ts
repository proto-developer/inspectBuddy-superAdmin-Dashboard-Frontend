import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const useAdminNavbarTitle = () => {
  const pathname = usePathname();

  const [pageTitle, setPageTitle] = useState<string>("Home");
  const [pagePath, setPagePath] = useState<string>("/");

  useEffect(() => {
    if (pathname === "/dashboard") {
      setPageTitle("Dashboard");
      setPagePath("/dashboard");
    } else if (pathname === "/users") {
      setPageTitle("User Detail");
      setPagePath("/users");
    } else if (pathname.startsWith("/user-details")) {
      const dynamicPathPattern = /^\/admin\/user-details(\/[^/]+)?(\/[^/]+)?$/;
      if (dynamicPathPattern.test(pathname)) {
        setPageTitle("User's Details");
        setPagePath("/user-details");
      }
    } else {
      setPageTitle("Dashboard");
      setPagePath("/admin");
    }
  }, [pathname]);

  return {
    pageTitle,
    pagePath,
  };
};
