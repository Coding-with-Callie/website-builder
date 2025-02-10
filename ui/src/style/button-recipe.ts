import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    colorPalette: "button",
    _focus: {
      focusRingColor: "#a0627f",
    },
  },
});

export const iconButtonRecipe = defineRecipe({
  base: {
    _focus: {
      focusRingColor: "#a0627f",
    },
  },
});
