import { HStack, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { GrEdit, GrAdd, GrLogin } from "react-icons/gr";
import AddPageForm from "./AddPageForm";
import LoginForm from "./LoginForm";
import Modal from "./Modal";

type Props = {
  role: "admin" | "guest";
};

const AdminButtons = ({ role }: Props) => {
  const [addPage, setAddPage] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <>
      <HStack justifyContent="flex-end" p={4}>
        <IconButton
          aria-label="Edit Page"
          rounded="full"
          display={role === "admin" ? "flex" : "none"}
        >
          <GrEdit />
        </IconButton>
        <IconButton
          aria-label="Add Page"
          rounded="full"
          onClick={() => setAddPage(!addPage)}
          display={role === "admin" ? "flex" : "none"}
        >
          <GrAdd />
        </IconButton>
        <IconButton
          aria-label="Log in as admin"
          rounded="full"
          onClick={() => setLogin(!login)}
          opacity={0}
          _hover={{ opacity: 1 }}
        >
          <GrLogin />
        </IconButton>
      </HStack>
      <Modal open={addPage} setOpen={setAddPage}>
        <AddPageForm />
      </Modal>
      <Modal open={login} setOpen={setLogin}>
        <LoginForm setLogin={setLogin} />
      </Modal>
    </>
  );
};

export default AdminButtons;
