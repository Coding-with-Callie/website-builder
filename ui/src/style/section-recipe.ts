import { chakra, defineRecipe } from "@chakra-ui/react";

export const sectionRecipe = defineRecipe({
  base: {
    bg: "white",
    boxShadow: "lg",
    borderRadius: "sm",
    width: "100%",
    p: 4,
    display: "flex",
    flexDirection: "column",
  },
});

export const Section = chakra("div", sectionRecipe);
