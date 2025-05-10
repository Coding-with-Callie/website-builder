import { ReactNode, useState } from "react";
import { PageType } from "../types/page";
import { PagesContext } from "../contexts/PagesContext";

export const PagesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [pages, setPages] = useState<PageType[]>([]);

  return (
    <PagesContext.Provider value={{ pages, setPages }}>
      {children}
    </PagesContext.Provider>
  );
};
