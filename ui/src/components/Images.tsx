import { Box, HStack, Image } from "@chakra-ui/react";

type Props = {
  images: {
    src: string;
    alt: string;
  }[];
};

const Images = ({ images }: Props) => {
  return (
    <HStack gap={4} justifyContent="center">
      {images.map((image, index) => (
        <Box>
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            borderRadius="sm"
          />
        </Box>
      ))}
    </HStack>
  );
};

export default Images;
