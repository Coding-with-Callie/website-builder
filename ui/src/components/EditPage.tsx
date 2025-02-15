import { HStack, VStack, Button, Text } from "@chakra-ui/react";
import { PageType } from "../types/page";
import { Heading } from "../style/heading-recipe";
import Modal from "./Modal";
import EditPageForm from "./EditPageForm";
import { useEffect, useState } from "react";

type Props = {
  page: PageType;
  setEditPage: (editPage: boolean) => void;
};

const EditPage = ({ page, setEditPage }: Props) => {
  const [editPageDetails, setEditPageDetails] = useState(false);
  const draftExists =
    page.draft_heading || page.draft_menu_name || page.draft_path
      ? true
      : false;

  console.log("page", page);

  useEffect(() => {
    setEditPage(true);
  }, []);

  return (
    <>
      <HStack flex={1} w="100%" px={4} gap={4} mb={10}>
        <VStack
          p={4}
          bg="white"
          boxShadow="lg"
          borderRadius="sm"
          w="20%"
          h="100%"
        >
          <Button w="100%" onClick={() => setEditPageDetails(true)}>
            Edit Page Details
          </Button>
          {page.path !== "/" && <Button w="100%">Delete Page</Button>}
          {draftExists && (
            <>
              <Text mt={4} textAlign="center" w="100%">
                You've made changes!
              </Text>
              <Text mt={4} textAlign="center" w="100%">
                What would you like to do with them?
              </Text>
              <Button w="100%">Publish Changes</Button>
              <Button w="100%">Reset Changes</Button>
              <Button w="100%">Preview Changes</Button>
            </>
          )}
        </VStack>
        <VStack flex={1} h="100%">
          {page.draft_heading || page.heading ? (
            <Heading
              type="page"
              p={4}
              bg="white"
              boxShadow="lg"
              borderRadius="sm"
              textAlign="center"
              w="100%"
            >
              {page.draft_heading || page.heading}
            </Heading>
          ) : (
            <Button w="100%" onClick={() => setEditPageDetails(true)}>
              Add a Heading!
            </Button>
          )}
          <Button w="100%">Add a Section!</Button>
        </VStack>
      </HStack>
      <Modal open={editPageDetails} setOpen={setEditPageDetails}>
        <EditPageForm
          setEditPageDetails={setEditPageDetails}
          id={page.id}
          draft_menu_name={page.draft_menu_name || page.menu_name || ""}
          draft_path={page.draft_path || page.path || ""}
          draft_heading={page.draft_heading || page.heading || ""}
        />
      </Modal>
    </>
  );
};

export default EditPage;
