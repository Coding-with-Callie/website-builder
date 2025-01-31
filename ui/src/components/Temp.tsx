import { useOutletContext } from "react-router-dom";
import { User } from "../types/user";
import { Text } from "@chakra-ui/react";

const Temp = () => {
  const user = useOutletContext() as User;

  return (
    <>
      {user.role == "guest" ? (
        <>
          <h1>Guest is logged in</h1>
          <Text>This is some sample text that I want to try out</Text>
          <h1>No one is logged in</h1>
        </>
      ) : (
        <>
          <h1>
            {user.firstName} {user.lastName} is logged in
          </h1>
          <Text>This is some sample text that I want to try out</Text>
        </>
      )}
    </>
  );
};

export default Temp;
