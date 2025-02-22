import { Text, HStack, Image, VStack } from "@chakra-ui/react";
import { ImagesWithCaptionsType } from "../../types/content";

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
          {image.caption && (
            <Text key={index} flex={1}>
              {image.caption}
            </Text>
          )}
        </VStack>
      ))}
    </HStack>
  );
};

export default ImagesWithCaptions;
