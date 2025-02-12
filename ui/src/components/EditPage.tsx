import { VStack } from "@chakra-ui/react";
import { PageType } from "../types/page";
import { Heading } from "../style/heading-recipe";

type Props = {
  page: PageType;
};

const EditPage = ({ page }: Props) => {
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
        {`Edit ${page.menu_name} Page Details`}
      </Heading>
    </VStack>
  );
};

export default EditPage;
