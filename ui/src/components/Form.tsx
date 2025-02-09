import { axiosPrivate } from "../utils/axios";
import { Button, Fieldset, Input } from "@chakra-ui/react";
import { Heading } from "../style/heading-recipe";

type Props = {
  initialValues: { [key: string]: string };
  setInitialValues: (values: { [key: string]: string }) => void;
  route: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  responseAction: (response: any) => void;
};

const Form = ({
  initialValues,
  setInitialValues,
  route,
  responseAction,
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInitialValues({
      ...initialValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axiosPrivate
      .post(route, initialValues)
      .then((response) => {
        console.log(response);
        responseAction(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form
      style={{
        width: "70%",
        background: "white",
        padding: "20px",
        borderRadius: "5px",
      }}
      onSubmit={handleSubmit}
    >
      <Fieldset.Root>
        <Fieldset.Legend>
          <Heading type="nav">Login</Heading>
        </Fieldset.Legend>
        <Fieldset.Content>
          {Object.keys(initialValues).map((key) => {
            return (
              <Input
                key={key}
                name={key}
                onChange={handleChange}
                placeholder={key}
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
