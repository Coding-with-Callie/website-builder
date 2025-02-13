import { HStack, VStack, Button } from "@chakra-ui/react";
import { PageType } from "../types/page";
import { Heading } from "../style/heading-recipe";

type Props = {
  page: PageType;
};

const EditPage = ({ page }: Props) => {
  console.log("EditPage", page);

  return (
    <HStack flex={1} w="100%" px={4} gap={4} mb={10}>
      <VStack
        p={4}
        bg="white"
        boxShadow="lg"
        borderRadius="sm"
        w="15%"
        h="100%"
      >
        <Button w="100%">Publish Page</Button>
        <Button w="100%">Edit Page Details</Button>
        <Button w="100%">Reset Page to Last Publish</Button>
        <Button w="100%">Preview Page</Button>
        <Button w="100%">Delete Page</Button>
      </VStack>
      <VStack flex={1} h="100%">
        <Heading
          type="page"
          p={4}
          bg="white"
          boxShadow="lg"
          borderRadius="sm"
          textAlign="center"
          w="100%"
        >
          {page.draft_heading}
        </Heading>
        <Button w="100%">Add a Section!</Button>
      </VStack>
    </HStack>
  );
};

export default EditPage;
