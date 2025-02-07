import React from "react";
import { HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import sloth from "../assets/sloth.png";
import { Avatar } from "./ui/avatar";
import { Heading } from "../style/heading-recipe";

type Props = {
  photo?: string;
};

const Header = ({ photo }: Props) => {
  return (
    <HStack
      w="100%"
      p={4}
      justifyContent="space-between"
      boxShadow="lg"
      bg="white"
    >
      <Link to="/">
        <HStack>
          <Avatar name={"logo"} src={sloth} size="xl" />
          <Heading type="header">Coding with Callie</Heading>
        </HStack>
      </Link>
      {photo && <Avatar name={"callie"} src={photo} size="xl" />}
    </HStack>
  );
};

export default Header;
