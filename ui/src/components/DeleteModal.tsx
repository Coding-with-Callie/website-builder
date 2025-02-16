import { Button, HStack, Text } from "@chakra-ui/react";
import { Heading } from "../style/heading-recipe";
import { axiosCustom } from "../utils/axios";
import usePages from "../hooks/usePages";
import { useNavigate } from "react-router-dom";
import { useCurrentPage } from "../hooks/useCurrentPage";

type Props = {
  setDeletePage: (deletePage: boolean) => void;
};

const DeleteModal = ({ setDeletePage }: Props) => {
  const { pages, setPages } = usePages();
  const { id } = useCurrentPage(pages);
  const navigate = useNavigate();

  const deletePage = () => {
    axiosCustom.delete(`/pages/${id}`).then((response) => {
      // Close the modal
      setDeletePage(false);

      // Update the pages
      setPages(response.data.pages);

      // Navigate to the home page
      navigate("/");
    });
  };

  return (
    <>
      <Heading>Are you sure?</Heading>
      <Text>
        This action cannot be undone. This will permanently delete the page and
        remove your page data from our systems.
      </Text>
      <HStack>
        <Button onClick={deletePage}>Delete Page</Button>
        <Button
          variant="outline"
          onClick={() => {
            setDeletePage(false);
          }}
        >
          Cancel
        </Button>
      </HStack>
    </>
  );
};

export default DeleteModal;
