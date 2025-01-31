import { Spinner, VStack } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useUser } from "./hooks/useUser";

function App() {
  const { loading, user } = useUser();

  if (loading) {
    return <Spinner size="xl" />;
  }

  console.log("user", user);

  return (
    <VStack justifyContent={"space-between"} height="100vh">
      {/* Header needs user details too */}
      <Header photo={user?.photo} />
      <Outlet context={user} />
      <Footer />
    </VStack>
  );
}

export default App;
