import { Box } from "@chakra-ui/react";
import { PageType } from "../types/page";
import { Heading } from "../style/heading-recipe";
import LoginForm from "./LoginForm";

type Props = {
  page: PageType;
};

const Page = ({ page }: Props) => {
  if (page.path === "/login") {
    console.log("login");
    return <LoginForm />;
  }

  console.log("page", page.path);

  return (
    <Box p={5} bg="white" boxShadow="lg" borderRadius="lg">
      <Heading type="page">{page.heading}</Heading>
    </Box>
  );
};

export default Page;
