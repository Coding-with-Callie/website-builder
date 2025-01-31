import { chakra, defineRecipe } from "@chakra-ui/react";

export const logoRecipe = defineRecipe({
  base: {
    color: "#3e7aa6",
    fontSize: "36px",
    fontFamily: "Pacifico",
  },
  // variants: {
  //   visual: {
  //     solid: { bg: "red.200", color: "white" },
  //     outline: { borderWidth: "1px", borderColor: "red.200" },
  //   },
  //   size: {
  //     sm: { padding: "4", fontSize: "12px" },
  //     lg: { padding: "8", fontSize: "24px" },
  //   },
  // },
});

export const Logo = chakra("h1", logoRecipe);
