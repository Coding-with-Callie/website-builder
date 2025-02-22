import { Image, Text, Box } from "@chakra-ui/react";
import YouTube from "react-youtube";
import {
  ImageDataType,
  MediaDataType,
  VideoDataType,
} from "../../types/content";

type Props = {
  media: {
    type: "image" | "video";
    data: MediaDataType;
    maxWidth?: string;
  };
  text: string[];
  textFirst?: boolean;
};

const MediaAndText = ({ media, text, textFirst = true }: Props) => {
  return (
    <Box>
      <Box
        display="inline"
        float={textFirst ? "right" : "left"}
        borderRadius="sm"
        mr={textFirst ? 0 : 4}
        ml={textFirst ? 4 : 0}
        width={media.maxWidth || "50%"}
        height="fit-content"
      >
        {media.type === "image" ? (
          <Image
            src={(media.data as ImageDataType).src}
            alt={(media.data as ImageDataType).alt}
            borderRadius="sm"
            width="100%"
          />
        ) : (
          <YouTube
            videoId={(media.data as VideoDataType).id}
            opts={{ width: "100%" }}
          />
        )}
      </Box>
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

export default MediaAndText;
