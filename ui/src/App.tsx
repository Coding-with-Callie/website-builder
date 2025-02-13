import { Spinner, VStack } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useUser } from "./hooks/useUser";
import { PageType } from "./types/page";
import usePages from "./hooks/usePages";
import DynamicRoutes from "./components/DynamicRoutes";
import { useState } from "react";
import AdminButtons from "./components/AdminButtons";
import Modals from "./components/Modals";

function App() {
  const [addPage, setAddPage] = useState(false);
  const [editPage, setEditPage] = useState(false);
  const [login, setLogin] = useState(false);

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
  return (
    <VStack justifyContent={"space-between"} height="100vh">
      <Header
        photo={user?.photo}
        pages={pages}
        role={user.role}
        setEditPage={setEditPage}
      />
      <AdminButtons
        role={user.role}
        setLogin={setLogin}
        setAddPage={setAddPage}
        addPage={addPage}
        setEditPage={setEditPage}
        editPage={editPage}
      />
      <DynamicRoutes role={user.role} />
      <Modals
        addPage={addPage}
        setAddPage={setAddPage}
        login={login}
        setLogin={setLogin}
      />
      <Footer />
    </VStack>
  );
}

export default App;
