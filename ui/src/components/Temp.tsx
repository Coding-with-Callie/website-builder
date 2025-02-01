import { useOutletContext } from "react-router-dom";
import { User } from "../types/user";
import { Heading } from "../style/heading-recipe";

const Temp = () => {
  const user = useOutletContext() as User;

  return (
    <>
      {user.role == "guest" ? (
        <Heading type="page">Guest is logged in</Heading>
      ) : (
        <h1>
          {user.firstName} {user.lastName} is logged in
        </h1>
      )}
    </>
  );
};

export default Temp;
