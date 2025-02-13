import { Box, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import sloth from "../assets/sloth.png";
import { Avatar } from "./ui/avatar";
import { Heading } from "../style/heading-recipe";
import { PageType } from "../types/page";

type Props = {
  photo?: string;
  pages: PageType[];
  role: "admin" | "guest";
  setEditPage: (editPage: boolean) => void;
};

const Header = ({ photo, pages, setEditPage }: Props) => {
  return (
    <HStack
      w="100%"
      p={4}
      justifyContent="space-between"
      boxShadow="lg"
      bg="white"
    >
      <Link to="/" onClick={() => setEditPage(false)}>
        <HStack>
          <Avatar name={"logo"} src={sloth} size="xl" />
          <Heading type="header">Coding with Callie</Heading>
        </HStack>
      </Link>
      <HStack>
        {pages.map((page) => {
          return (
            <Box key={page.path}>
              {page.menu_name && (
                <Link
                  to={page.path}
                  key={page.path}
                  onClick={() => setEditPage(false)}
                >
                  <Heading mx={2}>{page.menu_name}</Heading>
                </Link>
              )}
            </Box>
          );
        })}
        {photo && <Avatar name={"callie"} src={photo} size="xl" ml={4} />}
      </HStack>
    </HStack>
  );
};

export default Header;
