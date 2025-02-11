import { Spinner, VStack } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useUser } from "./hooks/useUser";
import { PageType } from "./types/page";
import usePages from "./hooks/usePages";
import DynamicRoutes from "./components/DynamicRoutes";
import AdminButtons from "./components/AdminButtons";
import AddPageForm from "./components/AddPageForm";
import LoginForm from "./components/LoginForm";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  // useUser fetches the user details from the API
  // loading is true when the user details are being fetched
  const { loading, user } = useUser();
  const { pages } = usePages() as {
    pages: PageType[];
    setPages: (pages: PageType[]) => void;
  };

  const [addPage, setAddPage] = useState(false);
  const [login, setLogin] = useState(false);

  // Show a spinner while the user details are being fetched
  if (loading) {
    return <Spinner size="xl" />;
  }

  return (
    <VStack justifyContent={"space-between"} height="100vh">
      <Header photo={user?.photo} pages={pages} role={user.role} />
      <AdminButtons
        role={user.role}
        setLogin={setLogin}
        setAddPage={setAddPage}
        addPage={addPage}
      />
      <DynamicRoutes role={user.role} />
      <Modal open={addPage} setOpen={setAddPage}>
        <AddPageForm setAddPage={setAddPage} />
      </Modal>
      <Modal open={login} setOpen={setLogin}>
        <LoginForm setLogin={setLogin} />
      </Modal>
      <Footer />
    </VStack>
  );
}

export default App;
