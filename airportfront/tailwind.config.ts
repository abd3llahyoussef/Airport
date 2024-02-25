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
      animation: {
        cursor: "cursor .6s linear infinite alternate",
        typing: "typing 1.8s ease-out .8s 1 normal both",
        "typing-reverse":
          "typing 1.8s ease-out 0s infinite alternate-reverse both",
      },
      keyframes: {
        typing: {
          "0%": { width: "0" },
          "5% , 10%": { width: "1ch" },
          "15% , 20%": { width: "2ch" },
          "25% , 30%": { width: "3ch" },
          "35% , 40%": { width: "4ch" },
          "45% , 50%": { width: "5ch" },
          "55% , 60%": { width: "6ch" },
          "65% , 70%": { width: "7ch" },
          "75% , 80%": { width: "8ch" },
          "85% , 90%": { width: "9ch" },
          "95%": { width: "10ch" },
        },
      },
    },
    plugins: [],
  },
};
export default config;
