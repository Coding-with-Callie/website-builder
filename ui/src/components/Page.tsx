import { VStack } from "@chakra-ui/react";
import { PageType } from "../types/page";
import { Heading } from "../style/heading-recipe";
import { useEffect } from "react";
import { Section } from "../style/section-recipe";
import Row from "./Row";
import placeholder from "../assets/placeholder.jpg";

const row1 = [
  {
    type: "heading" as const,
    data: { text: "Heading" },
  },
];

const row2 = [
  {
    type: "image" as const,
    data: {
      src: placeholder,
      alt: "Placeholder",
      maxWidth: "400px",
    },
  },
  {
    type: "text" as const,
    data: {
      textBlocks: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Phasellus vel fermentum purus. Ut sit amet ultrices erat. Fusce suscipit ante sed metus sagittis, sollicitudin sollicitudin lectus consequat. Praesent vitae arcu quis massa viverra sodales. Mauris suscipit mi magna. Fusce porta a purus id gravida. Donec eget facilisis tortor. Integer dignissim urna et nulla commodo, id pretium leo accumsan.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Phasellus vel fermentum purus. Ut sit amet ultrices erat. Fusce suscipit ante sed metus sagittis, sollicitudin sollicitudin lectus consequat. Praesent vitae arcu quis massa viverra sodales. Mauris suscipit mi magna. Fusce porta a purus id gravida. Donec eget facilisis tortor. Integer dignissim urna et nulla commodo, id pretium leo accumsan.",
        "Suspendisse quis ipsum dolor. Phasellus maximus volutpat diam id pulvinar. Mauris eleifend enim nisl, eu venenatis diam tincidunt quis. Nullam velit eros, tincidunt vitae bibendum vel, suscipit sed purus. Maecenas tincidunt odio eu odio ornare fermentum. Praesent quis tortor lorem. Nulla eu sapien vitae nunc porttitor sollicitudin. Morbi sit amet convallis ante. Maecenas euismod vitae nisi ac vestibulum. Donec eu dapibus mauris, ac rutrum velit. Donec quis sapien a ex egestas ornare at ut metus.",
      ],
    },
  },
];

type Props = {
  page: PageType;
  setEditPage: (editPage: boolean) => void;
};

const Page = ({ page, setEditPage }: Props) => {
  const { heading } = page;

  useEffect(() => {
    setEditPage(false);
  }, []);

  return (
    <VStack w="90%" m="auto" flex={1} gap={4}>
      {heading && (
        <Section>
          <Heading type="page" textAlign="center">
            {heading}
          </Heading>
        </Section>
      )}
      <Section>
        <Row items={row1} />
        <Row items={row2} />
      </Section>
    </VStack>
  );
};

export default Page;
