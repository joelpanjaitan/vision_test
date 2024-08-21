import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderColor: {
        subdued: "#B0B0B0",
        focused: "#88C5D8",
        disabled: "#D1D1D1",
      },
      colors: {
        primary: {
          DEFAULT: "#3D3D3D",
          action: {
            DEFAULT: "#3487A6",
            hovered: "#2B5A73",
          },
        },
        background: "#fcfcfc",
        surface: {
          disabled: "#F6F6F6",
        },
        critical: {
          DEFAULT: "#CE4F34",
          hovered: "#AD3F28",
          pressed: "#773325",
        },
      },
    },
  },
  plugins: [require("tailwindcss-inner-border")],
};
export default config;
