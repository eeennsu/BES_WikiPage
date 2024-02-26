import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        glassmorphism: "rgba(255, 255, 255, 0.61)",
      },
      borderRadius: {
        '4xl': '32px',
      },
      fontSize: {
        'xxs': ['10px', '12px']
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
