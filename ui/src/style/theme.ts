import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    body: {
      backgroundColor: "#9eadbd",
    },
  },
});

export const system = createSystem(defaultConfig, config);
