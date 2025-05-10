import { Box, HStack, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import sloth from "../assets/sloth.png";
import { Avatar } from "./ui/avatar";
import { Heading } from "../style/heading-recipe";
import { PageType } from "../types/page";
import { RiDraftLine } from "react-icons/ri";
import { heading } from "../style/theme";

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
                <>
                  <Link
                    to={page.path}
                    key={page.path}
                    onClick={() => setEditPage(false)}
                  >
                    <HStack px={2}>
                      <Heading>{page.menu_name}</Heading>
                      {!page.publish_date && (
                        <Icon color={heading}>
                          <RiDraftLine />
                        </Icon>
                      )}
                    </HStack>
                  </Link>
                </>
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
