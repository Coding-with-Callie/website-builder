export type User = {
  firstName?: string;
  lastName?: string;
  role: string;
  username?: string;
  photo?: string;
};

export const guestUser: User = {
  role: "guest",
};
