import axios from "axios";
import { useEffect, useState } from "react";

export type User = {
  firstName: string;
  lastName: string;
  role: string;
  username: string;
};

const guestUser: User = {
  firstName: "guest",
  lastName: "guest",
  role: "guest",
  username: "guest",
};

export const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // No need to call API if there is no JWT cookie
    if (!document.cookie.includes("jwt")) {
      setUser(guestUser);
      setLoading(false);
      return;
    }

    axios
      .get("http://localhost:8080/auth/user-details", { withCredentials: true })
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
