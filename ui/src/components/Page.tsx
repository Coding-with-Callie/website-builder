import { VStack } from "@chakra-ui/react";
import { PageType } from "../types/page";
import { Heading } from "../style/heading-recipe";
import { useEffect } from "react";
import { Section } from "../style/section-recipe";
import Content, { ContentType } from "./Content";

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
    <VStack flex={1} gap={4} p={12} w="100%">
      {heading && (
        <Section>
          <Heading type="page" textAlign="center">
            {heading}
          </Heading>
        </Section>
      )}
      {page.sections &&
        page.sections.map((section, index) => {
          const content = section.data as ContentType[];

          console.log("Content:", content);

          return (
            <Section key={index}>
              {content.map((content, index) => (
                <Content key={index} content={content} />
              ))}
            </Section>
          );
        })}
    </VStack>
  );
};

export default Page;
