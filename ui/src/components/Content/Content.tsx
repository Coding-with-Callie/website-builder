import { Heading } from "../../style/heading-recipe";
import TextContent from "./TextContent";
import VideoContent from "./VideoContent";
import MediaAndText from "./MediaAndText";
import {
  ContentType,
  HeadingDataType,
  ImagesContentType,
  MediaAndTextDataType,
  TextDataType,
  VideoType,
} from "../../types/content";
import ImagesContent from "./ImageContent";

type Props = {
  content: ContentType;
};

const Content = ({ content }: Props) => {
  if (content.type === "heading") {
    const { text } = content.data as HeadingDataType;
    return <Heading type="section">{text}</Heading>;
  } else if (content.type === "media_and_text") {
    const { media, text, textFirst } = content.data as MediaAndTextDataType;
    return <MediaAndText media={media} text={text} textFirst={textFirst} />;
  } else if (content.type === "text") {
    const textBlocks = content.data as TextDataType;
    return <TextContent textBlocks={textBlocks} />;
  } else if (content.type === "images_with_captions") {
    const images = content.data as ImagesContentType;
    return <ImagesContent images={images} />;
  } else if (content.type === "video") {
    const { id, caption } = content.data as VideoType;
    return <VideoContent id={id} caption={caption} />;
  }
  return null;
};

export default Content;
