import { axiosCustom } from "../utils/axios";
import { Button, Fieldset, Input } from "@chakra-ui/react";
import { Heading } from "../style/heading-recipe";

type Props = {
  initialValues: { [key: string]: string };
  setInitialValues: (values: { [key: string]: string }) => void;
  route: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  responseAction: (response: any) => void;
  heading: string;
};

const Form = ({
  initialValues,
  setInitialValues,
  route,
  responseAction,
  heading,
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInitialValues({
      ...initialValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axiosCustom
      .post(route, initialValues)
      .then((response) => {
        responseAction(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const formatPlaceholder = (key: string): string => {
    key = key.replace("_", " ");
    key = key.charAt(0).toUpperCase() + key.slice(1);

    return key;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Fieldset.Root>
        <Fieldset.Legend>
          <Heading type="page">{heading}</Heading>
        </Fieldset.Legend>
        <Fieldset.Content>
          {Object.keys(initialValues).map((key) => {
            return (
              <Input
                key={key}
                name={key}
                onChange={handleChange}
                placeholder={formatPlaceholder(key)}
                type={key === "password" ? "password" : "text"}
              />
            );
          })}
        </Fieldset.Content>
        <Button type="submit">Submit</Button>
      </Fieldset.Root>
    </form>
  );
};

export default Form;
