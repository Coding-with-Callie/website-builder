import { PageType } from "../types/page";
import { axiosCustom } from "./axios";

export const getPages = async (): Promise<PageType[]> => {
  const response = await axiosCustom.get("/pages");
  return response.data.pages;
};
