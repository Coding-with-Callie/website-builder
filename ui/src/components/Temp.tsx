import { useOutletContext } from "react-router-dom";
import { User } from "../App";

const Temp = () => {
  const user = useOutletContext() as User;

  return (
    <>
      {user !== null ? <h1>{user.firstName}</h1> : <h1>No one is logged in</h1>}
    </>
  );
};

export default Temp;
