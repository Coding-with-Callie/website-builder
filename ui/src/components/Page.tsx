import { Box, VStack } from "@chakra-ui/react";
import { PageType } from "../types/page";
import { Heading } from "../style/heading-recipe";
import AdminButtons from "./AdminButtons";

type Props = {
  page: PageType;
  role: "admin" | "guest";
};

const Page = ({ page, role }: Props) => {
  return (
    <Box flex={1} w="100%">
      <AdminButtons role={role} />
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
    </Box>
  );
};

export default Page;
