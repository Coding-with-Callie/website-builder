import { Box, VStack } from "@chakra-ui/react";
import { PageType } from "../types/page";
import { Heading } from "../style/heading-recipe";
import AdminButtons from "./AdminButtons";
import { useState } from "react";
import Modal from "./Modal";
import AddPageForm from "./AddPageForm";
import LoginForm from "./LoginForm";

type Props = {
  page: PageType;
  role: "admin" | "guest";
};

const Page = ({ page, role }: Props) => {
  const [addPage, setAddPage] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <Box flex={1} w="100%">
      <AdminButtons
        role={role}
        setLogin={setLogin}
        setAddPage={setAddPage}
        addPage={addPage}
      />
      <VStack w="90%" m="auto">
        <Heading
          type="page"
          p={4}
          bg="white"
          boxShadow="lg"
          borderRadius="lg"
          w="100%"
          textAlign="center"
        >
          {page.heading}
        </Heading>
      </VStack>
      <Modal open={addPage} setOpen={setAddPage}>
        <AddPageForm setAddPage={setAddPage} />
      </Modal>
      <Modal open={login} setOpen={setLogin}>
        <LoginForm setLogin={setLogin} />
      </Modal>
    </Box>
  );
};

export default Page;
