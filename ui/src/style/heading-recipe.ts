import { chakra, defineRecipe } from "@chakra-ui/react";

export const headingRecipe = defineRecipe({
  base: {
    color: "#3e7aa6",
    fontFamily: "Pacifico",
    fontWeight: "bold",
  },
  variants: {
    type: {
      header: {
        fontSize: "36px",
      },
      page: {
        fontSize: "24px",
      },
    },
  },
});

export const Heading = chakra("h1", headingRecipe);
