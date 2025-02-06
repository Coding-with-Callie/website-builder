import { useOutletContext } from "react-router-dom";
import { User } from "../types/user";
import { Heading } from "../style/heading-recipe";
import { Box } from "@chakra-ui/react";

const Temp = () => {
  const user = useOutletContext() as User;

  return (
    <Box p={5} bg="white" boxShadow="lg" borderRadius="lg">
      {user.role == "guest" ? (
        <Heading type="page">Guest is logged in</Heading>
      ) : (
        <h1>
          {user.firstName} {user.lastName} is logged in
        </h1>
      )}
    </Box>
  );
};

export default Temp;
