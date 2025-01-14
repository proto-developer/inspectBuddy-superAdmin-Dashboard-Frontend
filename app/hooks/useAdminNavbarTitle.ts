import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLoaderStore } from "../store/loaderStore";

export const useAdminNavbarTitle = () => {
  const pathname = usePathname();
  const setIsLoading = useLoaderStore((state) => state.setIsLoading);

  const [pageTitle, setPageTitle] = useState<string>("Dashboard");
  const [pagePath, setPagePath] = useState<string>("/");

  useEffect(() => {
    setIsLoading(true);
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
    setIsLoading(false);
  }, [pathname]);

  return {
    pageTitle,
    pagePath,
  };
};
