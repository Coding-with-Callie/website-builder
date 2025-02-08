import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "./style/theme.ts";
// @ts-expect-error - no types available
import "@fontsource/pacifico";
import { PagesProvider } from "./components/PagesProvider.tsx";
import App from "./App.tsx";
import { UserProvider } from "./components/UserProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <ChakraProvider value={system}>
    <PagesProvider>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Router>
      </UserProvider>
    </PagesProvider>
  </ChakraProvider>
);
