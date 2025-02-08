import { Box } from "@chakra-ui/react";
import { PageType } from "../types/page";
import { Heading } from "../style/heading-recipe";

type Props = {
  page: PageType;
};

const Page = ({ page }: Props) => {
  return (
    <Box p={5} bg="white" boxShadow="lg" borderRadius="lg">
      <Heading type="page">{page.heading}</Heading>
    </Box>
  );
};

export default Page;
