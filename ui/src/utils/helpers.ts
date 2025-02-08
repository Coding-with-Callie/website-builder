import { PageType } from "../types/page";
import { axiosPrivate } from "./axios";

export const getPages = async (): Promise<PageType[]> => {
  const response = await axiosPrivate.get("/pages");
  return response.data.pages;
};
