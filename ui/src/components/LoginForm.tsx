import { useState } from "react";
import Form from "./Form";
import { User } from "../types/user";
import { PageType } from "../types/page";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import usePages from "../hooks/usePages";

const LoginForm = () => {
  const [initialValues, setInitialValues] = useState<{ [key: string]: string }>(
    {
      username: "",
      password: "",
    }
  );

  const navigate = useNavigate();
  const { setUser } = useUser();
  const { setPages } = usePages();

  const responseAction = (response: {
    data: { user: User; pages: PageType[] };
  }) => {
    navigate("/");
    setUser(response.data.user);
    setPages(response.data.pages);
  };

  return (
    <Form
      initialValues={initialValues}
      setInitialValues={setInitialValues}
      route={"/login"}
      responseAction={responseAction}
      heading="Login"
    />
  );
};

export default LoginForm;
