import { useEffect, useState } from "react";
import { guestUser, User } from "../types/user";
import { axiosPrivate } from "../utils/axios";

export const useUser = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // No need to call API if there is no JWT cookie
    if (!document.cookie.includes("jwt")) {
      setUser(guestUser);
      setLoading(false);
      return;
    }

    axiosPrivate
      .get("/user-details")
      .then((response) => {
        setUser(response.data.user);
      })
      .catch(() => {
        setUser(guestUser);
      })
      .finally(() => setLoading(false));
  }, []);

  return { loading, user };
};
