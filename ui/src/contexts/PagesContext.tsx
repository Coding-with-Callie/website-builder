import { PageType } from "../types/page";
import { createContext } from "react";

export type PagesContextType = {
  pages: PageType[];
  setPages: (pages: PageType[]) => void;
};

export const PagesContext = createContext<PagesContextType | undefined>(
  undefined
);
