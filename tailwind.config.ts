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
    },
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    extend: {
      colors: {
        "dark-gray": "#303030",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
