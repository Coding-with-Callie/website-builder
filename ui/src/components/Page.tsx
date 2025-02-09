import { Box, Button, HStack } from "@chakra-ui/react";
import { PageType } from "../types/page";
import { Heading } from "../style/heading-recipe";
import LoginForm from "./LoginForm";

type Props = {
  page: PageType;
};

const Page = ({ page }: Props) => {
  if (page.path === "/login") {
    return <LoginForm />;
  }

  return (
    <>
      <HStack>
        <Button>Edit</Button>
        <Button>Add</Button>
      </HStack>
      <Box p={5} bg="white" boxShadow="lg" borderRadius="lg">
        <Heading type="page">{page.heading}</Heading>
      </Box>
    </>
  );
};

export default Page;
