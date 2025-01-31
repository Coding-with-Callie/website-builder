import { Heading, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import sloth from "../assets/sloth.png";
import { Avatar } from "./ui/avatar";
import { Logo } from "../style/logo-recipe";

type Props = {
  photo?: string;
};

const Header = ({ photo }: Props) => {
  return (
    <HStack w="100%" p={4} justifyContent="space-between">
      <Link to="/">
        <HStack>
          <Image src={sloth} h={"80px"} borderRadius="50%" />
          <Logo>Coding with Callie</Logo>
          <Heading textStyle="logo">Coding with Callie</Heading>
        </HStack>
      </Link>
      {photo && <Avatar name={"callie"} src={photo} size="2xl" />}
    </HStack>
  );
};

export default Header;
