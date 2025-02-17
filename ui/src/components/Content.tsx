import { VStack } from "@chakra-ui/react";
import { Heading } from "../style/heading-recipe";
import ImageAndText from "./ImageAndText";
import Images from "./Images";

export type HeadingDataType = {
  text: string;
};

export type ImageAndTextDataType = {
  image: {
    src: string;
    alt: string;
    maxWidth: string;
  };
  text: {
    textBlocks: string[];
  };
};

export type ImagesDataType = {
  images: {
    src: string;
    alt: string;
  }[];
};

export type ContentType = {
  type: "heading" | "image_and_text" | "images";
  data: HeadingDataType | ImageAndTextDataType | ImagesDataType;
};

type Props = {
  data: ContentType[];
};

const Content = ({ data }: Props) => {
  return (
    <VStack gap={4} align="start">
      {data.map((content, index) => {
        if (content.type === "heading") {
          const data = content.data as HeadingDataType;
          return (
            <Heading key={index} type="section">
              {data.text}
            </Heading>
          );
        } else if (content.type === "image_and_text") {
          const data = content.data as ImageAndTextDataType;
          return (
            <ImageAndText key={index} image={data.image} text={data.text} />
          );
        } else if (content.type === "images") {
          const data = content.data as ImagesDataType;
          return <Images key={index} images={data.images} />;
        }
        return null;
      })}
    </VStack>
  );
};

export default Content;
