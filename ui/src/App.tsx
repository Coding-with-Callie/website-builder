import { VStack } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get("http://localhost:8080/auth/user-details", { withCredentials: true })
      .then((response) => {
        console.log("RESPONSE", response.data);
      });
  }, []);

  return (
    <VStack>
      <Header />
      <Outlet />
      <Footer />
    </VStack>
  );
}

export default App;
