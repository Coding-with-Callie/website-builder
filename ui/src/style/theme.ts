import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    body: {
      backgroundColor: "white",
    },
  },
});

export const system = createSystem(defaultConfig, config);
