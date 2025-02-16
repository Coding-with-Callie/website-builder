import { useState } from "react";
import Form from "./Form";
import { User } from "../types/user";
import { PageType } from "../types/page";
import usePages from "../hooks/usePages";
import { useNavigate } from "react-router-dom";

type Props = {
  setAddPage: (addPage: boolean) => void;
};

const AddPageForm = ({ setAddPage }: Props) => {
  const [initialValues, setInitialValues] = useState<{ [key: string]: string }>(
    {
      menu_name: "",
      path: "",
      heading: "",
    }
  );

  const { setPages } = usePages();
  const navigate = useNavigate();

  const responseAction = (response: {
    data: { user: User; pages: PageType[]; path: string };
  }) => {
    setPages(response.data.pages);
    setAddPage(false);

    navigate(initialValues.path + "/edit");
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

export default AddPageForm;
