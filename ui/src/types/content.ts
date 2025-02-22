export type HeadingDataType = {
  text: string;
};

export type TextDataType = string[];

export type ImageDataType = {
  src: string;
  alt: string;
};

export type VideoDataType = {
  id: string;
};

export type MediaDataType = VideoDataType | ImageDataType;

export type MediaAndTextDataType = {
  media: {
    type: "image" | "video";
    data: MediaDataType;
    maxWidth?: string;
  };
  text: TextDataType;
  textFirst: boolean;
};

export type ImageWithCaptionType = {
  src: string;
  alt: string;
  caption: string;
};

export type ImagesWithCaptionsType = ImageWithCaptionType[];

export type VideoType = {
  id: string;
};

export type ContentType = {
  type:
    | "heading"
    | "media_and_text"
    | "text"
    | "images_with_captions"
    | "video";
  data:
    | HeadingDataType
    | MediaAndTextDataType
    | TextDataType
    | ImagesWithCaptionsType
    | VideoType;
};
