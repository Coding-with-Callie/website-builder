export type User = {
  firstName: string;
  lastName: string;
  role: string;
  username: string;
};

export const guestUser: User = {
  firstName: "guest",
  lastName: "guest",
  role: "guest",
  username: "guest",
};
