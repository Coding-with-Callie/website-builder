import { useState } from "react";
import Form from "./Form";
import { User } from "../types/user";
import { PageType } from "../types/page";
import { useUser } from "../hooks/useUser";
import usePages from "../hooks/usePages";

const LoginForm = () => {
  const [initialValues, setInitialValues] = useState<{ [key: string]: string }>(
    {
      menu_name: "",
      path: "",
      heading: "",
    }
  );

  const { setUser } = useUser();
  const { setPages } = usePages();

  const responseAction = (response: {
    data: { user: User; pages: PageType[]; path: string };
  }) => {
    setUser(response.data.user);
    setPages(response.data.pages);
    window.location.href = "http://localhost:5173" + response.data.path;
  };

  return (
    <Form
      initialValues={initialValues}
      setInitialValues={setInitialValues}
      route={"/pages"}
      responseAction={responseAction}
      heading="Add Page"
    />
  );
};

export default LoginForm;
