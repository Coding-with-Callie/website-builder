import { useState } from "react";
import Form from "./Form";
import { User } from "../types/user";
import { PageType } from "../types/page";
import usePages from "../hooks/usePages";

type Props = {
  id: number;
  draft_menu_name: string;
  draft_path: string;
  draft_heading: string;
  setEditPageDetails: (editPageDetails: boolean) => void;
};

const EditPageForm = ({
  id,
  draft_menu_name,
  draft_path,
  draft_heading,
  setEditPageDetails,
}: Props) => {
  const initialValuesWithPath = {
    menu_name: draft_menu_name,
    path: draft_path,
    heading: draft_heading,
  };

  const initialValuesWithoutPath = {
    menu_name: draft_menu_name,
    heading: draft_heading,
  };

  const [initialValues, setInitialValues] = useState<{ [key: string]: string }>(
    draft_path === "/" ? initialValuesWithoutPath : initialValuesWithPath
  );

  const { setPages } = usePages();

  const responseAction = (response: {
    data: { user: User; pages: PageType[]; path: string };
  }) => {
    setPages(response.data.pages);
    setEditPageDetails(false);
  };

  return (
    <Form
      initialValues={initialValues}
      setInitialValues={setInitialValues}
      route={`/pages/${id}`}
      method="patch"
      responseAction={responseAction}
      heading="Edit Page"
    />
  );
};

export default EditPageForm;
