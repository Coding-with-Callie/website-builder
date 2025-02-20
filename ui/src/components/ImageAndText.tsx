import { Image, Text, Box } from "@chakra-ui/react";

type Props = {
  image: {
    src: string;
    alt: string;
    maxWidth?: string;
  };
  text: string[];
  textFirst?: boolean;
};

const ImageAndText = ({ image, text, textFirst = true }: Props) => {
  return (
    <Box>
      <Image
        src={image.src}
        alt={image.alt}
        borderRadius="sm"
        maxW={image.maxWidth || "50%"}
        float={textFirst ? "right" : "left"}
        display="inline"
        mr={textFirst ? 0 : 4}
        ml={textFirst ? 4 : 0}
      />
      <Box>
        {text.map((text, index) => (
          <Text key={index} mb={4}>
            {text}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default ImageAndText;
