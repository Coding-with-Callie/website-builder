import { Spinner, VStack } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useUser } from "./hooks/useUser";
import { PageType } from "./types/page";
import usePages from "./hooks/usePages";
import DynamicRoutes from "./components/DynamicRoutes";

function App() {
  // useUser fetches the user details from the API
  // loading is true when the user details are being fetched
  const { loading, user } = useUser();
  const { pages } = usePages() as {
    pages: PageType[];
    setPages: (pages: PageType[]) => void;
  };

  // Show a spinner while the user details are being fetched
  if (loading) {
    return <Spinner size="xl" />;
  }

  console.log("user", user);

  return (
    <VStack justifyContent={"space-between"} height="100vh">
      <Header photo={user?.photo} pages={pages} role={user.role} />
      <DynamicRoutes />
      <Footer />
    </VStack>
  );
}

export default App;
