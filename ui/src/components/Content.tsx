import { Heading } from "../style/heading-recipe";
import ImageAndText from "./ImageAndText";
import Images from "./Images";
import TextContent from "./TextContent";

export type HeadingDataType = {
  text: string;
};

export type TextDataType = string[];

export type ImageAndTextDataType = {
  image: {
    src: string;
    alt: string;
    maxWidth: string;
  };
  text: TextDataType;
};

export type ImagesDataType = {
  images: {
    src: string;
    alt: string;
  }[];
};

export type ContentType = {
  type: "heading" | "image_and_text" | "images" | "text";
  data: HeadingDataType | ImageAndTextDataType | ImagesDataType | TextDataType;
};

type Props = {
  content: ContentType;
};

const Content = ({ content }: Props) => {
  if (content.type === "heading") {
    const { text } = content.data as HeadingDataType;
    return <Heading type="section">{text}</Heading>;
  } else if (content.type === "image_and_text") {
    const { image, text } = content.data as ImageAndTextDataType;
    return <ImageAndText image={image} text={text} />;
  } else if (content.type === "images") {
    const { images } = content.data as ImagesDataType;
    return <Images images={images} />;
  } else if (content.type === "text") {
    const textBlocks = content.data as TextDataType;
    return <TextContent textBlocks={textBlocks} />;
  }
  return null;
};

export default Content;
