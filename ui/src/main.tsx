import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Temp from "./components/Temp.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "./theme.ts";

createRoot(document.getElementById("root")!).render(
  <ChakraProvider value={system}>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Temp />} />
        </Route>
      </Routes>
    </Router>
  </ChakraProvider>
);
