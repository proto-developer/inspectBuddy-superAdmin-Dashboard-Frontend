import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 5px 20px rgba(14, 8, 84, 0.08)",
      },
      screens: {
        xs: "330px", // Custom breakpoint
        "min-1150": "1150px",
      },
      colors: {
        primary: "#2A85FF",
        darkPrimary: "#1378FF",
        secondary: "#100A55",
        lightBlue: "#E4F0FF",
        darkBlue: "#000929",
        gray: {
          light: "#CBCBCB",
          dark: "#6C727F",
        },
        inputField: {
          bg: "#F3F8FF",
          border: "#CCE2FF",
        },
      },
      fontFamily: {
        jakartaSans: ['"Plus Jakarta Sans"'],
      },
    },
  },
  plugins: [],
} satisfies Config;
