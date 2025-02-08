import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "./style/theme.ts";
// @ts-expect-error - no types available
import "@fontsource/pacifico";
import { axiosPublic } from "./utils/axios.ts";
import Page from "./components/Page.tsx";
import { PageType } from "./types/page.ts";

const getPages = async (): Promise<PageType[]> => {
  const response = await axiosPublic.get("/pages");
  return response.data.pages;
};

const loadApp = async () => {
  const pages = await getPages();

  if (!Array.isArray(pages)) {
    throw new Error("Pages not found");
  }

  createRoot(document.getElementById("root")!).render(
    <ChakraProvider value={system}>
      <Router>
        <Routes>
          <Route path="/" element={<App pages={pages} />}>
            {pages.map((page) => (
              <Route path={page.path} element={<Page page={page} />} />
            ))}
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

loadApp();
