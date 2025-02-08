import { ReactNode, useState } from "react";
import { guestUser, User } from "../types/user";
import { UserContext } from "../contexts/UserContext";

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User>(guestUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
