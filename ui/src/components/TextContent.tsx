import { HStack, Text } from "@chakra-ui/react";

type Props = {
  textBlocks: string[];
};

const TextContent = ({ textBlocks }: Props) => {
  return (
    <HStack gap={4} justifyContent="center">
      {textBlocks.map((text, index) => (
        <Text key={index} flex={1}>
          {text}
        </Text>
      ))}
    </HStack>
  );
};

export default TextContent;
