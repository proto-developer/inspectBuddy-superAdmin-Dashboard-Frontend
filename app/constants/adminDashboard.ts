import {
  ACTIVE_USERS_ICON,
  MONTHLY_SALES_ICON,
  TOTAL_SALES_ICON,
  TOTAL_USERS_ICON,
} from "@/public/icons/Dynamic_Icons";

export const ADMIN_DASHBOARD_STATS = [
  {
    _id: 1,
    label: "Total Users",
    statCount: 9.34,
    icon: TOTAL_USERS_ICON,
    statPercentage: 125,
    chartData: [
      { date: "Jan", "Total Users Value": -25 },
      { date: "Feb", "Total Users Value": -10 },
      { date: "Mar", "Total Users Value": 5 },
      { date: "Apr", "Total Users Value": 15 },
      { date: "May", "Total Users Value": 30 },
      { date: "Jun", "Total Users Value": 15 },
      { date: "Jul", "Total Users Value": 30 },
      { date: "Aug", "Total Users Value": 40 },
      { date: "Sep", "Total Users Value": 15 },
      { date: "Oct", "Total Users Value": 20 },
      { date: "Nov", "Total Users Value": 0 },
      { date: "Dec", "Total Users Value": -10 },
    ],
    chartColor: "#0A82FD",
  },
  {
    _id: 2,
    label: "Current Month Sales",
    statCount: 3.34,
    icon: MONTHLY_SALES_ICON,
    statPercentage: 125,
    chartData: [
      { date: "Jan", "Current Month Sales Value": -25 },
      { date: "Feb", "Current Month Sales Value": -10 },
      { date: "Mar", "Current Month Sales Value": 5 },
      { date: "Apr", "Current Month Sales Value": 15 },
      { date: "May", "Current Month Sales Value": 30 },
      { date: "Jun", "Current Month Sales Value": 15 },
      { date: "Jul", "Current Month Sales Value": 30 },
      { date: "Aug", "Current Month Sales Value": 40 },
      { date: "Sep", "Current Month Sales Value": 15 },
      { date: "Oct", "Current Month Sales Value": 20 },
      { date: "Nov", "Current Month Sales Value": 0 },
      { date: "Dec", "Current Month Sales Value": -10 },
    ],
    chartColor: "#27AE60",
  },
  {
    _id: 3,
    label: "Active Users",
    statCount: 3.5,
    icon: ACTIVE_USERS_ICON,
    statPercentage: -125,
    chartData: [
      { date: "Jan", "Active Users Value": -25 },
      { date: "Feb", "Active Users Value": -10 },
      { date: "Mar", "Active Users Value": 5 },
      { date: "Apr", "Active Users Value": 15 },
      { date: "May", "Active Users Value": 30 },
      { date: "Jun", "Active Users Value": 15 },
      { date: "Jul", "Active Users Value": 30 },
      { date: "Aug", "Active Users Value": 40 },
      { date: "Sep", "Active Users Value": 15 },
      { date: "Oct", "Active Users Value": 20 },
      { date: "Nov", "Active Users Value": 0 },
      { date: "Dec", "Active Users Value": -10 },
    ],
    chartColor: "#EF5DA8",
  },
  {
    _id: 4,
    label: "Total Sales",
    statCount: 0.34,
    icon: TOTAL_SALES_ICON,
    statPercentage: 125,
    chartData: [
      { date: "Jan", "Total Sales Value": -25 },
      { date: "Feb", "Total Sales Value": -10 },
      { date: "Mar", "Total Sales Value": 5 },
      { date: "Apr", "Total Sales Value": 15 },
      { date: "May", "Total Sales Value": 30 },
      { date: "Jun", "Total Sales Value": 15 },
      { date: "Jul", "Total Sales Value": 30 },
      { date: "Aug", "Total Sales Value": 40 },
      { date: "Sep", "Total Sales Value": 15 },
      { date: "Oct", "Total Sales Value": 20 },
      { date: "Nov", "Total Sales Value": 0 },
      { date: "Dec", "Total Sales Value": -10 },
    ],
    chartColor: "#F2994A",
  },
];

export const SUBSCRIPTION_TYPE = [
  {
    _id: 1,
    key: "all",
    value: "All Users",
  },
  {
    _id: 2,
    key: "FREETIER",
    value: "Free Tier",
  },
  {
    _id: 3,
    key: "all",
    value: "Trial Tier",
  },
  {
    _id: 4,
    key: "STANDARDTIER",
    value: "Standard Tier",
  },
  {
    _id: 5,
    key: "TOPTIER",
    value: "Top Tier",
  },
];

export const TABLE_COLUMNS_HEADINGS = [
  { key: "serialNo", value: "S#NO" },
  { key: "userName", value: "User Name" },
  { key: "userEmail", value: "User Email" },
  { key: "planStatus", value: "Plan Status" },
];

export const USER_DETAILS_SIDEBAR = [
  {
    pageTitle: "User Details",
    pagePath: "",
  },
  {
    pageTitle: "Sub Users",
    pagePath: "sub-users",
  },
  {
    pageTitle: "Properties",
    pagePath: "properties",
  },
  {
    pageTitle: "Inspections",
    pagePath: "inspections",
  },
  {
    pageTitle: "Templates",
    pagePath: "templates",
  },
];
