import { VStack } from "@chakra-ui/react";
import { PageType } from "../types/page";
import { Heading } from "../style/heading-recipe";

type Props = {
  page: PageType;
};

const Page = ({ page }: Props) => {
  return (
    <VStack w="90%" m="auto" flex={1}>
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
  );
};

export default Page;
