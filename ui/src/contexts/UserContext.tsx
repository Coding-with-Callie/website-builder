import { createContext } from "react";
import { User } from "../types/user";

export type UserContextType = {
  user: User;
  setUser: (User: User) => void;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
