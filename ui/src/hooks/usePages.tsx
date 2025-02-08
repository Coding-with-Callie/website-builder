import { useEffect } from "react";
import { PagesContextType } from "../contexts/PagesContext";
import { getPages } from "../utils/helpers";
import { usePagesContext } from "./usePageContext";

const usePages = () => {
  const { pages, setPages } = usePagesContext() as PagesContextType;

  useEffect(() => {
    getPages().then((pages) => {
      setPages(pages);
    });
  }, [setPages]);

  return { pages, setPages };
};

export default usePages;
