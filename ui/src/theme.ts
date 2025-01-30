import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { textStyles } from "./text-style";

const config = defineConfig({
  globalCss: {
    body: {
      backgroundColor: "white",
    },
  },
  theme: {
    textStyles,
  },
});

export const system = createSystem(defaultConfig, config);
