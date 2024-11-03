import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontSize: {
      abbr: [
        "0.938rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      "abbr-md": [
        "2.5rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      h3: [
        "0.938rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "700",
          letterSpacing: "0.188rem",
        },
      ],
      "h3-lg": [
        "1.5rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "700",
          letterSpacing: "0.3rem",
        },
      ],
      "h4-mobile": [
        "0.938rem",
        {
          lineHeight: "1.563rem",
          fontWeight: "400",
          letterSpacing: "0.188rem",
        },
      ],
      h4: [
        "1.25rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "400",
          letterSpacing: "0.25rem",
        },
      ],
      mobile: [
        "0.75rem",
        {
          lineHeight: "1.375rem",
          letterSpacing: "0rem",
        },
      ],
      base: [
        "1.125rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "400",
        },
      ],
      h2: [
        "1.25rem",
        {
          lineHeight: "1.5rem",
          fontWeight: "700",
        },
      ],
      "h2-md": [
        "2.5rem",
        {
          lineHeight: "2.5rem",
          fontWeight: "700",
        },
      ],
      "h2-lg": [
        "3.5rem",
        {
          lineHeight: "4.25rem",
          fontWeight: "700",
        },
      ],
      "h1-lg": [
        "12.5rem",
        {
          lineHeight: "12.5rem",
          fontWeight: "700",
          letterSpacing: "-0.313rem",
        },
      ],
      h1: [
        "6.25rem",
        {
          lineHeight: "6.25rem",
          fontWeight: "700",
          letterSpacing: "-0.156rem",
        },
      ],
      h6: [
        "0.625rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "400",
          letterSpacing: "0.125rem",
        },
      ],
      "h6-md": [
        "0.813rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "400",
          letterSpacing: "0.163rem",
        },
      ],
      "h6-lg": [
        "0.938rem",
        {
          lineHeight: "1.75rem",
          letterSpacing: "0.188rem",
        },
      ],
      "button-md": [
        "1rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "700",
          letterSpacing: "0.313rem",
        },
      ],
      button: [
        "0.75rem",
        {
          lineHeight: "0.875rem",
          fontWeight: "700",
          letterSpacing: "0.234rem",
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
