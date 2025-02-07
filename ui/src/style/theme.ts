import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { buttonRecipe } from "./button-recipe";

export const heading = "#3e7aa6";
export const text = "#2b5574";
export const button = "#a0627f";
export const mainBackground = "#9eadbd";
export const contentBackground = "white";

export const lightenByPercentage = (hex: string, percent: number) => {
  // Remove the hash at the start if it's there
  hex = hex.replace(/^#/, "");

  // Parse the r, g, b values
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  // Calculate the new r, g, b values
  r = Math.min(255, Math.floor(r + (255 - r) * (percent / 100)));
  g = Math.min(255, Math.floor(g + (255 - g) * (percent / 100)));
  b = Math.min(255, Math.floor(b + (255 - b) * (percent / 100)));

  // Convert the r, g, b values back to hex
  const newHex = `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;

  return newHex;
};

export const getColors = (color: string) => {
  return {
    100: lightenByPercentage(color, 40),
    200: lightenByPercentage(color, 30),
    300: lightenByPercentage(color, 20),
    400: lightenByPercentage(color, 10),
    500: lightenByPercentage(color, 0),
    600: lightenByPercentage(color, -10),
    700: lightenByPercentage(color, -20),
    800: lightenByPercentage(color, -30),
    900: lightenByPercentage(color, -40),
  };
};

const config = defineConfig({
  globalCss: {
    body: {
      backgroundColor: "#9eadbd",
    },
  },
  theme: {
    semanticTokens: {
      colors: {
        button: {
          solid: { value: button },
          contrast: { value: "white" },
        },
      },
    },
    recipes: {
      button: buttonRecipe,
    },
  },
});

export const system = createSystem(defaultConfig, config);
