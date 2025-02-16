import { Heading } from "../style/heading-recipe";
import { Section } from "../style/section-recipe";
import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import placeholder from "../assets/placeholder.jpg";

const HeadingTextImageSection = () => {
  return (
    <Section>
      <Heading type="section">Lorem Ipsum</Heading>
      <HStack alignItems="flex-start" gap={4}>
        <Image src={placeholder} w="40%" />
        <VStack>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text>
            Phasellus vel fermentum purus. Ut sit amet ultrices erat. Fusce
            suscipit ante sed metus sagittis, sollicitudin sollicitudin lectus
            consequat. Praesent vitae arcu quis massa viverra sodales. Mauris
            suscipit mi magna. Fusce porta a purus id gravida. Donec eget
            facilisis tortor. Integer dignissim urna et nulla commodo, id
            pretium leo accumsan.
          </Text>
        </VStack>
      </HStack>
    </Section>
  );
};

export default HeadingTextImageSection;
