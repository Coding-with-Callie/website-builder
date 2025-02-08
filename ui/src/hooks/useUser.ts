import { useEffect, useState } from "react";
import { axiosPrivate } from "../utils/axios";
import { UserContextType } from "../contexts/UserContext";
import { useUserContext } from "./useUserContext";

export const useUser = () => {
  const [loading, setLoading] = useState(true);
  const { user, setUser } = useUserContext() as UserContextType;

  useEffect(() => {
    // No need to call API if there is no JWT cookie
    if (!document.cookie.includes("loggedIn")) {
      setLoading(false);
      return;
    }

    // Call the API to fetch user details
    // The API will return the real user or the guest user depending on the vality of the JWT cookie
    axiosPrivate
      .get("/user-details")
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((error) => {
        // The default user is the guest user
        // So, no need to set the user to the guest user if the API call fails
        // But, we can log the error to the console for debugging purposes
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return { loading, user, setUser };
};
