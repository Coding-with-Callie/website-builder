import { chakra, defineRecipe } from "@chakra-ui/react";
import { heading } from "./theme";

export const headingRecipe = defineRecipe({
  base: {
    color: heading,
    fontWeight: "bold",
  },
  variants: {
    type: {
      header: {
        fontSize: "32px",
        fontFamily: "Pacifico",
      },
      page: {
        fontSize: "24px",
      },
      footer: {
        fontSize: "18px",
      },
    },
  },
});

export const Heading = chakra("h1", headingRecipe);
