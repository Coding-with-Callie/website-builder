import { Spinner, VStack } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useUser } from "./hooks/useUser";
import { PageType } from "./types/page";

function App({ pages }: { pages: PageType[] }) {
  // useUser fetches the user details from the API
  // loading is true when the user details are being fetched
  const { loading, user } = useUser();

  // Show a spinner while the user details are being fetched
  if (loading) {
    return <Spinner size="xl" />;
  }

  return (
    <VStack justifyContent={"space-between"} height="100vh">
      <Header photo={user?.photo} pages={pages} />
      <Outlet context={user} />
      <Footer />
    </VStack>
  );
}

export default App;
