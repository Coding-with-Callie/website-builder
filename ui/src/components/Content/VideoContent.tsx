import { HStack } from "@chakra-ui/react";
import YouTube from "react-youtube";

type Props = {
  id: string;
};

const VideoContent = ({ id }: Props) => {
  return (
    <HStack w="100%" justifyContent="center">
      <YouTube videoId={id} />
    </HStack>
  );
};

export default VideoContent;
