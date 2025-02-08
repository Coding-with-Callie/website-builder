import { PageType } from "../types/page";
import { axiosPrivate } from "./axios";

export const getRole = async (): Promise<"admin" | "guest"> => {
  const response = await axiosPrivate.get("/auth/user-details");
  return response.data.user.role;
};

export const showPage = async (
  page: PageType,
  role?: "admin" | "guest"
): Promise<boolean> => {
  if (role === undefined) {
    role = await getRole();
  }

  if (role === "admin") {
    return true;
  }

  if (role === "guest" && page.publish_date !== null) {
    return true;
  }

  return false;
};
