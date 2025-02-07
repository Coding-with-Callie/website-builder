import { useOutletContext } from "react-router-dom";
import { User } from "../types/user";
import { Box, Text } from "@chakra-ui/react";

const Temp = () => {
  const user = useOutletContext() as User;

  return (
    <Box p={5} bg="white" boxShadow="lg" borderRadius="lg">
      {user.role == "guest" ? (
        <Text>Guest is logged in</Text>
      ) : (
        <Text>
          {user.firstName} {user.lastName} is logged in
        </Text>
      )}
    </Box>
  );
};

export default Temp;
