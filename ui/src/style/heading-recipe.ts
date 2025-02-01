import { chakra, defineRecipe } from "@chakra-ui/react";

export const headingRecipe = defineRecipe({
  base: {
    color: "#3e7aa6",
    fontWeight: "bold",
  },
  variants: {
    type: {
      header: {
        fontSize: "36px",
        fontFamily: "Pacifico",
      },
      page: {
        fontSize: "24px",
      },
    },
  },
});

export const Heading = chakra("h1", headingRecipe);
