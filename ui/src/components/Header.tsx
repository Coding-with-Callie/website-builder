import { HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import sloth from "../assets/sloth.png";
import { Avatar } from "./ui/avatar";
import { Heading } from "../style/heading-recipe";
import { PageType } from "../types/page";

type Props = {
  photo?: string;
  pages: PageType[];
};

const Header = ({ photo, pages }: Props) => {
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
      <HStack>
        {pages.map((page) => {
          return (
            <Link to={page.path} key={page.path}>
              <Heading type="nav">{page.menu_name}</Heading>
            </Link>
          );
        })}
        {photo && <Avatar name={"callie"} src={photo} size="xl" ml={4} />}
      </HStack>
    </HStack>
  );
};

export default Header;
