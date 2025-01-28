import { Spinner, VStack } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useUser } from "./hooks/useUSer";

function App() {
  const { loading, user } = useUser();

  if (loading) {
    return <Spinner size="xl" />;
  }

  return (
    <VStack>
      {/* Header needs user details too */}
      <Header />
      <Outlet context={user} />
      <Footer />
    </VStack>
  );
}

export default App;
