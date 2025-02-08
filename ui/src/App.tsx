import { Spinner, VStack } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useUser } from "./hooks/useUser";
import { PageType } from "./types/page";
import { useState } from "react";

function App({ pages }: { pages: PageType[] }) {
  // useUser fetches the user details from the API
  // loading is true when the user details are being fetched
  const { loading, user, setUser } = useUser();

  const [localPages, setLocalPages] = useState<PageType[]>(pages);

  // Show a spinner while the user details are being fetched
  if (loading) {
    return <Spinner size="xl" />;
  }

  return (
    <VStack justifyContent={"space-between"} height="100vh">
      <Header photo={user?.photo} pages={localPages} role={user.role} />
      <Outlet context={{ user, setUser, setLocalPages }} />
      <Footer />
    </VStack>
  );
}

export default App;
