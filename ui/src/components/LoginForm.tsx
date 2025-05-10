import { useState } from "react";
import Form from "./Form";
import { User } from "../types/user";
import { PageType } from "../types/page";
import { useUser } from "../hooks/useUser";
import usePages from "../hooks/usePages";

type Props = {
  setLogin: (login: boolean) => void;
};

const LoginForm = ({ setLogin }: Props) => {
  const [initialValues, setInitialValues] = useState<{ [key: string]: string }>(
    {
      username: "",
      password: "",
    }
  );

  const { setUser } = useUser();
  const { setPages } = usePages();

  const responseAction = (response: {
    data: { user: User; pages: PageType[] };
  }) => {
    // Close the modal with the form
    setLogin(false);

    // Update the user and pages context
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
