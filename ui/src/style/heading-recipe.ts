import { chakra, defineRecipe } from "@chakra-ui/react";
import { heading } from "./theme";

export const headingRecipe = defineRecipe({
  base: {
    color: heading,
    fontWeight: "bold",
    fontSize: "18px",
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
      section: {
        fontSize: "20px",
      },
    },
  },
});

export const Heading = chakra("h1", headingRecipe);
