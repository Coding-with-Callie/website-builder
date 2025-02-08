export type User = {
  firstName?: string;
  lastName?: string;
  role: "admin" | "guest";
  username?: string;
  photo?: string;
};

export const guestUser: User = {
  role: "guest",
};

export type UserContext = {
  user: User;
  setUser: (user: User) => void;
};
