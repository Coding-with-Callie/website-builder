import { useContext } from "react";
import { PagesContext, PagesContextType } from "../contexts/PagesContext";

export const usePagesContext = (): PagesContextType => {
  const context = useContext(PagesContext);

  if (!context) {
    throw new Error("usePagesContext must be used within a PagesProvider");
  }
  return context;
};
