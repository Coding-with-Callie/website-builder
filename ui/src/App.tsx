import { Spinner, VStack } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { loading, user } = useAuth();

  if (loading) {
    return <Spinner size="xl" />;
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
