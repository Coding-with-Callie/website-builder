import { Box, HStack, IconButton, VStack } from "@chakra-ui/react";
import { PageType } from "../types/page";
import { Heading } from "../style/heading-recipe";
import LoginForm from "./LoginForm";
import { GrAdd, GrEdit, GrLogin } from "react-icons/gr";
import { useState } from "react";
import Modal from "./Modal";
import AddPageForm from "./AddPageForm";

type Props = {
  page: PageType;
  role: "admin" | "guest";
};

const Page = ({ page, role }: Props) => {
  const [addPage, setAddPage] = useState(false);
  const [login, setLogin] = useState(false);

  if (page.path === "/login") {
    return <LoginForm />;
  }

  return (
    <Box flex={1} w="100%">
      <HStack justifyContent="flex-end" p={4}>
        {role === "admin" && (
          <>
            <IconButton aria-label="Edit Page" rounded="full">
              <GrEdit />
            </IconButton>
            <IconButton
              aria-label="Add Page"
              rounded="full"
              onClick={() => setAddPage(!addPage)}
            >
              <GrAdd />
            </IconButton>
          </>
        )}
        <IconButton
          aria-label="Log in as admin"
          rounded="full"
          onClick={() => setLogin(!login)}
        >
          <GrLogin />
        </IconButton>
      </HStack>
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
        <Modal open={addPage} setOpen={setAddPage}>
          <AddPageForm />
        </Modal>
        <Modal open={login} setOpen={setLogin}>
          <LoginForm />
        </Modal>
      </VStack>
    </Box>
  );
};

export default Page;
