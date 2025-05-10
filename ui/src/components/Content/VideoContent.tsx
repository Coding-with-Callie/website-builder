import { HStack, VStack, Text } from "@chakra-ui/react";
import YouTube from "react-youtube";

type Props = {
  id: string;
  caption?: string;
};

const VideoContent = ({ id, caption }: Props) => {
  return (
    <VStack>
      <HStack w="100%" justifyContent="center">
        <YouTube videoId={id} />
      </HStack>
      {caption && <Text flex={1}>{caption}</Text>}
    </VStack>
  );
};

export default VideoContent;
