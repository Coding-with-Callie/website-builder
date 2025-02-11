import { VStack } from "@chakra-ui/react";
import { PageType } from "../types/page";
import { Heading } from "../style/heading-recipe";

type Props = {
  page: PageType;
};

const EditPage = ({ page }: Props) => {
  console.log(page);

  return (
    <VStack
      w="90%"
      m="auto"
      background="white"
      boxShadow="lg"
      borderRadius="lg"
      p={4}
      flex={1}
    >
      <Heading>{page.menu_name} Page Details</Heading>
    </VStack>
  );
};

export default EditPage;
