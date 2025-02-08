import { PageType } from "./page";
import { User } from "./user";

export type OutletContext = {
  user: User;
  setUser: (user: User) => void;
  localPages: PageType[];
  setLocalPages: (pages: PageType[]) => void;
};
