import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontSize: {
      base: [
        "1.125rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "400",
        },
      ],
      h2: [
        "3.5rem",
        {
          lineHeight: "4.25rem",
          fontWeight: "700",
        },
      ],
      h6: [
        "0.938rem",
        {
          lineHeight: "1.75rem",
          letterSpacing: "0.188rem",
        },
      ],
    },
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    extend: {
      spacing: {
        "0.25": "0.063rem",
        "2.25": "0.563rem",
        "10.5": "2.625rem",
        "23.5": "5.875rem",
        "36.75": "9.188rem",
      },
      backdropBlur: {
        xl: "1.274rem",
      },
      colors: {
        "dark-gray": "#303030",
        "light-gray": "#999999",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
