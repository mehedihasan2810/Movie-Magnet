import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "tg-bg-color": "var(--telegram-bg-color)",
        "tg-btn-color": "var(--telegram-button-color)",
        "tg-btn-text-color": "var(--telegram-button-text-color)",
        "tg-hint-color": "var(--telegram-hint-color)",
        "tg-link-color": "var(--telegram-link-color)",
        "tg-secondary-bg-color": "var(--telegram-secondary-bg-color)",
        "tg-text-color": "var(--telegram-text-color)",
        "tg-header-bg-color": "var(--telegram-header-bg-color)",
        "tg-accent-text-color": "var(--telegram-accent-text-color)",
        "tg-section-bg-color": "var(--telegram-section-bg-color)",
        "tg-section-header-text-color":
          "var(--telegram-section-header-text-color)",
        "tg-subtitle-text-color": "var(--telegram-subtitle-text-color)",
        "tg-destructive-text-color": "var(--telegram-destructive-text-color)",
      },
    },
  },
  plugins: [],
};
export default config;
