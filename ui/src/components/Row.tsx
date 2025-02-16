import { Text, Image, Box } from "@chakra-ui/react";
import { Heading } from "../style/heading-recipe";

export type HeadingDataType = {
  text: string;
};

export type TextDataType = {
  textBlocks: string[];
};

export type ImageDataType = {
  src: string;
  alt: string;
  maxWidth: string;
};

export type ItemType = {
  type: "heading" | "text" | "image";
  data: HeadingDataType | TextDataType | ImageDataType;
};

type Props = {
  items: ItemType[];
};

const Row = ({ items }: Props) => {
  return (
    <Box>
      {items.map((item, index) => {
        if (item.type === "heading") {
          const heading = item.data as HeadingDataType;
          return (
            <Heading key={index} type="section" flex="1">
              {heading.text}
            </Heading>
          );
        } else if (item.type === "text") {
          const text = item.data as TextDataType;
          return (
            <Box key={index}>
              {text.textBlocks.map((text, subIndex) => (
                <Text key={`${index}-${subIndex}`} mb={4}>
                  {text}
                </Text>
              ))}
            </Box>
          );
        } else if (item.type === "image") {
          const image = item.data as ImageDataType;
          return (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              borderRadius="sm"
              maxW={image.maxWidth || 100 / items.length + "%"}
              float="right"
              display="inline"
              pb={4}
              px={4}
            />
          );
        }
        return null;
      })}
    </Box>
  );
};

export default Row;
