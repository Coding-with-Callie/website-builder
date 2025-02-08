import { Button, Fieldset, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Heading } from "../style/heading-recipe";
import { axiosPrivate } from "../utils/axios";
import { useNavigate, useOutletContext } from "react-router-dom";
import { OutletContext } from "../types/outlet";

const LoginForm = () => {
  const [initialValues, setInitialValues] = useState({
    username: "",
    password: "",
  });

  const { setUser, setLocalPages } = useOutletContext() as OutletContext;

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInitialValues({
      ...initialValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(initialValues);

    axiosPrivate
      .post("/login", initialValues)
      .then((response) => {
        navigate("/");
        setUser(response.data.user);
        setLocalPages(response.data.pages);
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
          <Input name="username" onChange={handleChange} />
          <Input name="password" type="password" onChange={handleChange} />
        </Fieldset.Content>
        <Button type="submit">Submit</Button>
      </Fieldset.Root>
    </form>
  );
};

export default LoginForm;
