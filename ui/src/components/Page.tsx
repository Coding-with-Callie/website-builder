import { Box, Text } from "@chakra-ui/react";
import { PageType } from "../types/page";

type Props = {
  page: PageType;
};

const Page = ({ page }: Props) => {
  if (page.path === "/*") {
    return <Text>Wildcard page</Text>;
  }

  return (
    <Box p={5} bg="white" boxShadow="lg" borderRadius="lg">
      <Text fontSize="xl" fontWeight="bold">
        {page.menu_name}
      </Text>
      <Text>{page.path}</Text>
    </Box>
  );
};

export default Page;
