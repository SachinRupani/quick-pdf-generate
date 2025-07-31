import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";
import { DarkThemeColors, LightThemeColors } from "./app-colors";

/** @type {import('tailwindcss').Config} */
export const config: Config = {
  content: [
    // ...
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [
    heroui({
      prefix: "heroui", // prefix for themes variables
      addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      themes: {
        layout: {}, // common layout tokens (applied to all themes)
        light: {
          colors: LightThemeColors,
        },
        dark: {
          colors: DarkThemeColors,
        },
      },
      layout: {
        disabledOpacity: "0.5",
      },
    }),
  ],
};

module.exports = config;
