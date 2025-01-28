import { useOutletContext } from "react-router-dom";
import { User } from "../hooks/useAuth";

const Temp = () => {
  const user = useOutletContext() as User;

  return (
    <>
      {user.role == "guest" ? (
        <h1>No one is logged in</h1>
      ) : (
        <h1>{user.firstName}</h1>
      )}
    </>
  );
};

export default Temp;
