import { VStack } from "@chakra-ui/react";
import { PageType } from "../types/page";
import { Heading } from "../style/heading-recipe";
import { useEffect } from "react";

type Props = {
  page: PageType;
  setEditPage: (editPage: boolean) => void;
};

const Page = ({ page, setEditPage }: Props) => {
  const { heading } = page;

  useEffect(() => {
    setEditPage(false);
  }, []);

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
