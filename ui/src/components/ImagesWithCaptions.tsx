import { Text, HStack, Image, VStack } from "@chakra-ui/react";
import { ImagesWithCaptionsType } from "./Content";

export type ImageWithCaptionType = {
  src: string;
  alt: string;
  caption: string;
};

type Props = {
  images: ImagesWithCaptionsType;
};

const ImagesWithCaptions = ({ images }: Props) => {
  return (
    <HStack gap={4} alignItems="flex-start" justifyContent="center">
      {images.map((image, index) => (
        <VStack>
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            borderRadius="sm"
          />
          <Text key={index} flex={1}>
            {image.caption}
          </Text>
        </VStack>
      ))}
    </HStack>
  );
};

export default ImagesWithCaptions;
