import { useEffect } from "react";
import { PagesContextType } from "../contexts/PagesContext";
import { getPages } from "../utils/helpers";
import { usePagesContext } from "./usePageContext";
import { sections } from "../utils/sampledata";

const usePages = () => {
  const { pages, setPages } = usePagesContext() as PagesContextType;

  useEffect(() => {
    getPages().then((pages) => {
      pages.forEach((page) => {
        if (page.path === "/") {
          page.sections = sections;
        }
      });
      setPages(pages);
    });
  }, [setPages]);

  return { pages, setPages };
};

export default usePages;
