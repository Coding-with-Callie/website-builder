import { useLocation } from "react-router-dom";
import { PageType } from "../types/page";

export const useCurrentPage = (pages: PageType[]) => {
  const { pathname } = useLocation();
  const path = "/" + pathname.split("/")[1];

  const currentPage = pages.find((p: PageType) => p.path === path) as PageType;
  return currentPage;
};
