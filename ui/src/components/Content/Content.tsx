import { Heading } from "../../style/heading-recipe";
import ImagesWithCaptions from "./ImagesWithCaptions";
import TextContent from "./TextContent";
import VideoContent from "./VideoContent";
import MediaAndText from "./MediaAndText";
import {
  ContentType,
  HeadingDataType,
  ImagesWithCaptionsType,
  MediaAndTextDataType,
  TextDataType,
  VideoType,
} from "../../types/content";

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
    const images = content.data as ImagesWithCaptionsType;
    return <ImagesWithCaptions images={images} />;
  } else if (content.type === "video") {
    const { id } = content.data as VideoType;
    return <VideoContent id={id} />;
  }
  return null;
};

export default Content;
