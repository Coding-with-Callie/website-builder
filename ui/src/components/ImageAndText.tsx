import { Image, Text, Box } from "@chakra-ui/react";

type Props = {
  image: {
    src: string;
    alt: string;
    maxWidth?: string;
  };
  text: string[];
};

const ImageAndText = ({ image, text }: Props) => {
  return (
    <Box>
      <Image
        src={image.src}
        alt={image.alt}
        borderRadius="sm"
        maxW={image.maxWidth || "50%"}
        float="right"
        display="inline"
        mb={4}
        mx={4}
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
