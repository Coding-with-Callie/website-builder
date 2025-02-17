import { HStack } from "@chakra-ui/react";
import { Heading } from "../style/heading-recipe";
import SocialMediaButton from "./SocialMediaButton";

const Footer = () => {
  return (
    <HStack
      w="100%"
      p={4}
      boxShadow="lg"
      bg="white"
      justifyContent="center"
      mt={20}
    >
      <Heading>Contact Callie:</Heading>
      {["linkedin", "youtube", "github", "mail"].map((type) => (
        <SocialMediaButton key={type} type={type} />
      ))}
    </HStack>
  );
};

export default Footer;
