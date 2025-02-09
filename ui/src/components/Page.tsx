import { Box, HStack, IconButton, VStack } from "@chakra-ui/react";
import { PageType } from "../types/page";
import { Heading } from "../style/heading-recipe";
import LoginForm from "./LoginForm";
import { GrAdd, GrEdit } from "react-icons/gr";
import { useState } from "react";
import Modal from "./Modal";

type Props = {
  page: PageType;
};

const Page = ({ page }: Props) => {
  const [addPage, setAddPage] = useState(false);

  if (page.path === "/login") {
    return <LoginForm />;
  }

  return (
    <Box flex={1} w="100%">
      <HStack justifyContent="flex-end" p={4}>
        <IconButton aria-label="Edit Page" rounded="full">
          <GrEdit />
        </IconButton>
        <IconButton
          aria-lavel="Add Page"
          rounded="full"
          onClick={() => setAddPage(!addPage)}
        >
          <GrAdd />
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
        <Modal open={addPage} setOpen={setAddPage} />
      </VStack>
    </Box>
  );
};

export default Page;
