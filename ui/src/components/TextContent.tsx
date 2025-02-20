import { HStack, Text, VStack } from "@chakra-ui/react";

type Props = {
  textBlocks: string[];
  flexDirection?: "row" | "column";
};

const TextContent = ({ textBlocks, flexDirection = "column" }: Props) => {
  return flexDirection === "row" ? (
    <HStack gap={4} justifyContent="center">
      {textBlocks.map((text, index) => (
        <Text key={index} flex={1}>
          {text}
        </Text>
      ))}
    </HStack>
  ) : (
    <VStack gap={4} justifyContent="center">
      {textBlocks.map((text, index) => (
        <Text key={index} flex={1}>
          {text}
        </Text>
      ))}
    </VStack>
  );
};

export default TextContent;
