import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const useAdminNavbarTitle = () => {
  const router = useRouter();

  const [pageTitle, setPageTitle] = useState<string>("Home");
  const [pagePath, setPagePath] = useState<string>("/");

  useEffect(() => {
    const currentPath = router.pathname;

    if (currentPath === "/admin/dashboard") {
      setPageTitle("Dashboard");
      setPagePath("/admin");
    } else if (currentPath === "/admin/users") {
      setPageTitle("User Detail");
      setPagePath("/admin/users");
    } else if (currentPath.startsWith("/admin/user-details")) {
      const dynamicPathPattern = /^\/admin\/user-details(\/[^/]+)?(\/[^/]+)?$/;
      if (dynamicPathPattern.test(currentPath)) {
        setPageTitle("User's Details");
        setPagePath("/admin/user-details");
      }
    } else {
      setPageTitle("Dashboard");
      setPagePath("/admin");
    }
  }, [router.pathname]);

  return {
    pageTitle,
    pagePath,
  };
};
