import { VStack } from "@chakra-ui/react";
import { PageType } from "../types/page";
import { Heading } from "../style/heading-recipe";

type Props = {
  page: PageType;
};

const Page = ({ page }: Props) => {
  const { heading } = page;
  return (
    <VStack w="90%" m="auto" flex={1}>
      {heading && (
        <Heading
          type="page"
          p={4}
          bg="white"
          boxShadow="lg"
          borderRadius="sm"
          w="100%"
          textAlign="center"
        >
          {heading}
        </Heading>
      )}
    </VStack>
  );
};

export default Page;
