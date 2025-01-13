import {
  DashboardIcon,
  MyTeamIcon,
  TemplatesIcon,
  ReportsIcon,
} from "@/public/icons/Dynamic_Icons";

export const SIDEBAR_ITEMS = [
  {
    title: "Dashboard",
    Icon: DashboardIcon,
    link: "/dashboard",
  },
  {
    title: "Users",
    Icon: MyTeamIcon,
    link: "/users",
  },
  {
    title: "Plan Settings",
    Icon: TemplatesIcon,
    link: "/plan-settings",
  },
  {
    title: "Report Settings",
    Icon: ReportsIcon,
    link: "/reports-settings",
  },
];
