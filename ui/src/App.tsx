import { Spinner, VStack } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export type User = {
  firstName: string;
  lastName: string;
  role: string;
  username: string;
};

function App() {
  const [user, setUser] = useState<User | null | "loading">("loading");

  useEffect(() => {
    // No need to call API if there is no JWT cookie
    if (!document.cookie.includes("jwt")) {
      setUser(null);
      return;
    }

    axios
      .get("http://localhost:8080/auth/user-details", { withCredentials: true })
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setUser(null);
        }
      });
  }, []);

  if (user === "loading") {
    return <Spinner />;
  }

  return (
    <VStack>
      <Header />
      <Outlet context={user} />
      <Footer />
    </VStack>
  );
}

export default App;
