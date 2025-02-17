import { Spinner, VStack } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";
import { useUser } from "../hooks/useUser";
import { PageType } from "../types/page";
import usePages from "../hooks/usePages";
import DynamicRoutes from "./DynamicRoutes";
import { useState } from "react";
import AdminButtons from "./AdminButtons";
import Modals from "./Modals";

function App() {
  const [addPage, setAddPage] = useState(false);
  const [editPage, setEditPage] = useState(false);
  const [login, setLogin] = useState(false);
  const [deletePage, setDeletePage] = useState(false);

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
    <VStack justifyContent={"space-between"}>
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
      <DynamicRoutes
        role={user.role}
        setEditPage={setEditPage}
        setDeletePage={setDeletePage}
      />
      <Modals
        addPage={addPage}
        setAddPage={setAddPage}
        login={login}
        setLogin={setLogin}
        deletePage={deletePage}
        setDeletePage={setDeletePage}
      />
      <Footer />
    </VStack>
  );
}

export default App;
