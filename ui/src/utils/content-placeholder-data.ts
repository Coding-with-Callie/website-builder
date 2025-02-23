import {
  ContentType,
  HeadingDataType,
  ImagesContentType,
  MediaAndTextDataType,
  TextDataType,
  VideoType,
} from "../types/content";

export const headingContent: ContentType = {
  type: "heading",
  data: {
    text: "Lorem Ipsum",
  } as HeadingDataType,
};

export const textContent: ContentType = {
  type: "text",
  data: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor erat, hendrerit at tempor et, sollicitudin nec risus. Morbi pharetra tristique lectus, non placerat ex lobortis sed. Quisque cursus lorem non mollis imperdiet.",
    "Curabitur vel ex fringilla, fermentum dui quis, venenatis risus. Nam dignissim imperdiet quam vitae tempor. Morbi ipsum sapien, sollicitudin ac tincidunt et, aliquam vel lacus. Sed mollis at quam vitae rutrum. Duis et dui laoreet, maximus ligula porttitor, tincidunt augue. In lacinia eget ligula eget dapibus. Duis ultricies et massa vel porttitor.",
  ] as TextDataType,
};

export const oneImageContent: ContentType = {
  type: "images_with_captions",
  data: [
    {
      src: "https://coding-with-callie.s3.us-east-1.amazonaws.com/placeholder.jpg",
      alt: "Placeholder",
    },
  ] as ImagesContentType,
};

export const twoImagesContent: ContentType = {
  type: "images_with_captions",
  data: [
    {
      src: "https://coding-with-callie.s3.us-east-1.amazonaws.com/placeholder.jpg",
      alt: "Placeholder",
    },
    {
      src: "https://coding-with-callie.s3.us-east-1.amazonaws.com/placeholder.jpg",
      alt: "Placeholder",
    },
  ] as ImagesContentType,
};

export const threeImagesContent: ContentType = {
  type: "images_with_captions",
  data: [
    {
      src: "https://coding-with-callie.s3.us-east-1.amazonaws.com/placeholder.jpg",
      alt: "Placeholder",
    },
    {
      src: "https://coding-with-callie.s3.us-east-1.amazonaws.com/placeholder.jpg",
      alt: "Placeholder",
    },
    {
      src: "https://coding-with-callie.s3.us-east-1.amazonaws.com/placeholder.jpg",
      alt: "Placeholder",
    },
  ] as ImagesContentType,
};

export const fourImagesContent: ContentType = {
  type: "images_with_captions",
  data: [
    {
      src: "https://coding-with-callie.s3.us-east-1.amazonaws.com/placeholder.jpg",
      alt: "Placeholder",
    },
    {
      src: "https://coding-with-callie.s3.us-east-1.amazonaws.com/placeholder.jpg",
      alt: "Placeholder",
    },
    {
      src: "https://coding-with-callie.s3.us-east-1.amazonaws.com/placeholder.jpg",
      alt: "Placeholder",
    },
    {
      src: "https://coding-with-callie.s3.us-east-1.amazonaws.com/placeholder.jpg",
      alt: "Placeholder",
    },
  ] as ImagesContentType,
};

export const oneImageWithCaptionContent: ContentType = {
  type: "images_with_captions",
  data: [
    {
      src: "https://coding-with-callie.s3.us-east-1.amazonaws.com/placeholder.jpg",
      alt: "Placeholder",
      caption: "Morbi ut justo ac sem egestas convallis at id magna",
    },
  ] as ImagesContentType,
};

export const twoImagesWithCaptionsContent: ContentType = {
  type: "images_with_captions",
  data: [
    {
      src: "https://coding-with-callie.s3.us-east-1.amazonaws.com/placeholder.jpg",
      alt: "Placeholder",
      caption: "Morbi ut justo ac sem egestas convallis at id magna",
    },
    {
      src: "https://coding-with-callie.s3.us-east-1.amazonaws.com/placeholder.jpg",
      alt: "Placeholder",
      caption:
        "Nullam consequat, risus id fringilla aliquam, ligula sapien varius urna",
    },
  ] as ImagesContentType,
};

export const threeImagesWithCaptionsContent: ContentType = {
  type: "images_with_captions",
  data: [
    {
      src: "https://coding-with-callie.s3.us-east-1.amazonaws.com/placeholder.jpg",
      alt: "Placeholder",
      caption: "Morbi ut justo ac sem egestas convallis at id magna",
    },
    {
      src: "https://coding-with-callie.s3.us-east-1.amazonaws.com/placeholder.jpg",
      alt: "Placeholder",
      caption:
        "Nullam consequat, risus id fringilla aliquam, ligula sapien varius urna",
    },
    {
      src: "https://coding-with-callie.s3.us-east-1.amazonaws.com/placeholder.jpg",
      alt: "Placeholder",
      caption:
        "Nulla tincidunt leo tellus, vestibulum euismod neque pretium nec",
    },
  ] as ImagesContentType,
};

export const fourImagesWithCaptionsContent: ContentType = {
  type: "images_with_captions",
  data: [
    {
      src: "https://coding-with-callie.s3.us-east-1.amazonaws.com/placeholder.jpg",
      alt: "Placeholder",
      caption: "Morbi ut justo ac sem egestas convallis at id magna",
    },
    {
      src: "https://coding-with-callie.s3.us-east-1.amazonaws.com/placeholder.jpg",
      alt: "Placeholder",
      caption:
        "Nullam consequat, risus id fringilla aliquam, ligula sapien varius urna",
    },
    {
      src: "https://coding-with-callie.s3.us-east-1.amazonaws.com/placeholder.jpg",
      alt: "Placeholder",
      caption:
        "Nulla tincidunt leo tellus, vestibulum euismod neque pretium nec",
    },
    {
      src: "https://coding-with-callie.s3.us-east-1.amazonaws.com/placeholder.jpg",
      alt: "Placeholder",
      caption: "Etiam euismod aliquet elementum",
    },
  ] as ImagesContentType,
};

export const videoContent: ContentType = {
  type: "video",
  data: {
    id: "qnRqZYEjfkc",
  } as VideoType,
};

export const videoWithCaptionContent: ContentType = {
  type: "video",
  data: {
    id: "qnRqZYEjfkc",
    caption: "Morbi ut justo ac sem egestas convallis at id magna",
  } as VideoType,
};

export const TextLeftImageRightContent: ContentType = {
  type: "media_and_text",
  data: {
    media: {
      type: "image",
      maxWidth: "30%",
      data: {
        src: "https://coding-with-callie.s3.us-east-1.amazonaws.com/placeholder.jpg",
        alt: "Placeholder",
      },
    },
    text: [
      "Morbi ut justo ac sem egestas convallis at id magna. Nullam consequat, risus id fringilla aliquam, ligula sapien varius urna, vitae fermentum lacus eros sit amet mi. Nulla tincidunt leo tellus, vestibulum euismod neque pretium nec. Etiam euismod aliquet elementum. Integer laoreet massa at orci cursus, sed volutpat nunc malesuada. Etiam vehicula ligula sit amet nibh interdum tristique. In ultrices lectus a feugiat volutpat. Suspendisse potenti. Ut et leo ac nisi viverra sagittis vitae sed metus. Nam dignissim facilisis metus, vel pellentesque lacus scelerisque eu.",
      "Duis in convallis ex, eu ultricies arcu. Pellentesque blandit, mauris sed fermentum interdum, purus quam auctor lectus, quis porttitor ex erat vitae nunc. Morbi velit leo, pellentesque pretium blandit nec, finibus ac magna. Vestibulum molestie ipsum vitae pulvinar pharetra. In hac habitasse platea dictumst. Sed finibus augue sit amet dui pulvinar vulputate. Integer et dictum purus, sit amet lacinia quam. Pellentesque velit velit, varius id ante vel, vulputate ultrices justo. Duis a dui sed libero volutpat condimentum.",
      "Suspendisse non magna aliquet, faucibus ipsum vel, pharetra dolor. Pellentesque efficitur magna quis nisi facilisis venenatis. Mauris elementum libero odio, vel pulvinar mauris porttitor ut. Vestibulum dictum rutrum est, id sollicitudin tellus condimentum sit amet. Donec condimentum suscipit viverra. Quisque a nunc dui. Praesent cursus ante quis lacus consequat faucibus. Nulla egestas quis magna eget blandit. Phasellus ut accumsan dolor, eu maximus arcu. Phasellus ullamcorper diam sit amet urna laoreet ultrices.",
      "Nulla pharetra pharetra libero a porttitor. Integer sollicitudin interdum facilisis. Morbi volutpat urna ut nisl sodales, ut suscipit augue fermentum. Cras consectetur non lacus in laoreet. Nullam finibus sollicitudin ipsum, id eleifend mauris aliquam quis. Duis elementum congue erat, auctor ullamcorper leo luctus vel. Morbi et hendrerit ante, at maximus velit. Nam vulputate id nulla quis sodales. Vestibulum lorem dolor, tristique pretium mollis sit amet, vestibulum facilisis nibh. Vivamus lobortis eros nec luctus mollis. Ut ut consectetur felis. Nullam viverra ex vitae nisl rutrum rhoncus.",
    ],
    textFirst: true,
  } as MediaAndTextDataType,
};

export const ImageLeftTextRightContent: ContentType = {
  type: "media_and_text",
  data: {
    media: {
      type: "image",
      maxWidth: "30%",
      data: {
        src: "https://coding-with-callie.s3.us-east-1.amazonaws.com/placeholder.jpg",
        alt: "Placeholder",
      },
    },
    text: [
      "Morbi ut justo ac sem egestas convallis at id magna. Nullam consequat, risus id fringilla aliquam, ligula sapien varius urna, vitae fermentum lacus eros sit amet mi. Nulla tincidunt leo tellus, vestibulum euismod neque pretium nec. Etiam euismod aliquet elementum. Integer laoreet massa at orci cursus, sed volutpat nunc malesuada. Etiam vehicula ligula sit amet nibh interdum tristique. In ultrices lectus a feugiat volutpat. Suspendisse potenti. Ut et leo ac nisi viverra sagittis vitae sed metus. Nam dignissim facilisis metus, vel pellentesque lacus scelerisque eu.",
      "Duis in convallis ex, eu ultricies arcu. Pellentesque blandit, mauris sed fermentum interdum, purus quam auctor lectus, quis porttitor ex erat vitae nunc. Morbi velit leo, pellentesque pretium blandit nec, finibus ac magna. Vestibulum molestie ipsum vitae pulvinar pharetra. In hac habitasse platea dictumst. Sed finibus augue sit amet dui pulvinar vulputate. Integer et dictum purus, sit amet lacinia quam. Pellentesque velit velit, varius id ante vel, vulputate ultrices justo. Duis a dui sed libero volutpat condimentum.",
      "Suspendisse non magna aliquet, faucibus ipsum vel, pharetra dolor. Pellentesque efficitur magna quis nisi facilisis venenatis. Mauris elementum libero odio, vel pulvinar mauris porttitor ut. Vestibulum dictum rutrum est, id sollicitudin tellus condimentum sit amet. Donec condimentum suscipit viverra. Quisque a nunc dui. Praesent cursus ante quis lacus consequat faucibus. Nulla egestas quis magna eget blandit. Phasellus ut accumsan dolor, eu maximus arcu. Phasellus ullamcorper diam sit amet urna laoreet ultrices.",
      "Nulla pharetra pharetra libero a porttitor. Integer sollicitudin interdum facilisis. Morbi volutpat urna ut nisl sodales, ut suscipit augue fermentum. Cras consectetur non lacus in laoreet. Nullam finibus sollicitudin ipsum, id eleifend mauris aliquam quis. Duis elementum congue erat, auctor ullamcorper leo luctus vel. Morbi et hendrerit ante, at maximus velit. Nam vulputate id nulla quis sodales. Vestibulum lorem dolor, tristique pretium mollis sit amet, vestibulum facilisis nibh. Vivamus lobortis eros nec luctus mollis. Ut ut consectetur felis. Nullam viverra ex vitae nisl rutrum rhoncus.",
    ],
    textFirst: false,
  } as MediaAndTextDataType,
};

export const TextLeftLargeImageRightContent: ContentType = {
  type: "media_and_text",
  data: {
    media: {
      type: "image",
      data: {
        src: "https://coding-with-callie.s3.us-east-1.amazonaws.com/placeholder.jpg",
        alt: "Placeholder",
      },
    },
    text: [
      "Morbi ut justo ac sem egestas convallis at id magna. Nullam consequat, risus id fringilla aliquam, ligula sapien varius urna, vitae fermentum lacus eros sit amet mi. Nulla tincidunt leo tellus, vestibulum euismod neque pretium nec. Etiam euismod aliquet elementum. Integer laoreet massa at orci cursus, sed volutpat nunc malesuada. Etiam vehicula ligula sit amet nibh interdum tristique. In ultrices lectus a feugiat volutpat. Suspendisse potenti. Ut et leo ac nisi viverra sagittis vitae sed metus. Nam dignissim facilisis metus, vel pellentesque lacus scelerisque eu.",
      "Duis in convallis ex, eu ultricies arcu. Pellentesque blandit, mauris sed fermentum interdum, purus quam auctor lectus, quis porttitor ex erat vitae nunc. Morbi velit leo, pellentesque pretium blandit nec, finibus ac magna. Vestibulum molestie ipsum vitae pulvinar pharetra. In hac habitasse platea dictumst. Sed finibus augue sit amet dui pulvinar vulputate. Integer et dictum purus, sit amet lacinia quam. Pellentesque velit velit, varius id ante vel, vulputate ultrices justo. Duis a dui sed libero volutpat condimentum.",
      "Suspendisse non magna aliquet, faucibus ipsum vel, pharetra dolor. Pellentesque efficitur magna quis nisi facilisis venenatis. Mauris elementum libero odio, vel pulvinar mauris porttitor ut. Vestibulum dictum rutrum est, id sollicitudin tellus condimentum sit amet. Donec condimentum suscipit viverra. Quisque a nunc dui. Praesent cursus ante quis lacus consequat faucibus. Nulla egestas quis magna eget blandit. Phasellus ut accumsan dolor, eu maximus arcu. Phasellus ullamcorper diam sit amet urna laoreet ultrices.",
      "Nulla pharetra pharetra libero a porttitor. Integer sollicitudin interdum facilisis. Morbi volutpat urna ut nisl sodales, ut suscipit augue fermentum. Cras consectetur non lacus in laoreet. Nullam finibus sollicitudin ipsum, id eleifend mauris aliquam quis. Duis elementum congue erat, auctor ullamcorper leo luctus vel. Morbi et hendrerit ante, at maximus velit. Nam vulputate id nulla quis sodales. Vestibulum lorem dolor, tristique pretium mollis sit amet, vestibulum facilisis nibh. Vivamus lobortis eros nec luctus mollis. Ut ut consectetur felis. Nullam viverra ex vitae nisl rutrum rhoncus.",
    ],
    textFirst: true,
  } as MediaAndTextDataType,
};

export const LargeImageLeftTextRightContent: ContentType = {
  type: "media_and_text",
  data: {
    media: {
      type: "image",
      data: {
        src: "https://coding-with-callie.s3.us-east-1.amazonaws.com/placeholder.jpg",
        alt: "Placeholder",
      },
    },
    text: [
      "Morbi ut justo ac sem egestas convallis at id magna. Nullam consequat, risus id fringilla aliquam, ligula sapien varius urna, vitae fermentum lacus eros sit amet mi. Nulla tincidunt leo tellus, vestibulum euismod neque pretium nec. Etiam euismod aliquet elementum. Integer laoreet massa at orci cursus, sed volutpat nunc malesuada. Etiam vehicula ligula sit amet nibh interdum tristique. In ultrices lectus a feugiat volutpat. Suspendisse potenti. Ut et leo ac nisi viverra sagittis vitae sed metus. Nam dignissim facilisis metus, vel pellentesque lacus scelerisque eu.",
      "Duis in convallis ex, eu ultricies arcu. Pellentesque blandit, mauris sed fermentum interdum, purus quam auctor lectus, quis porttitor ex erat vitae nunc. Morbi velit leo, pellentesque pretium blandit nec, finibus ac magna. Vestibulum molestie ipsum vitae pulvinar pharetra. In hac habitasse platea dictumst. Sed finibus augue sit amet dui pulvinar vulputate. Integer et dictum purus, sit amet lacinia quam. Pellentesque velit velit, varius id ante vel, vulputate ultrices justo. Duis a dui sed libero volutpat condimentum.",
      "Suspendisse non magna aliquet, faucibus ipsum vel, pharetra dolor. Pellentesque efficitur magna quis nisi facilisis venenatis. Mauris elementum libero odio, vel pulvinar mauris porttitor ut. Vestibulum dictum rutrum est, id sollicitudin tellus condimentum sit amet. Donec condimentum suscipit viverra. Quisque a nunc dui. Praesent cursus ante quis lacus consequat faucibus. Nulla egestas quis magna eget blandit. Phasellus ut accumsan dolor, eu maximus arcu. Phasellus ullamcorper diam sit amet urna laoreet ultrices.",
      "Nulla pharetra pharetra libero a porttitor. Integer sollicitudin interdum facilisis. Morbi volutpat urna ut nisl sodales, ut suscipit augue fermentum. Cras consectetur non lacus in laoreet. Nullam finibus sollicitudin ipsum, id eleifend mauris aliquam quis. Duis elementum congue erat, auctor ullamcorper leo luctus vel. Morbi et hendrerit ante, at maximus velit. Nam vulputate id nulla quis sodales. Vestibulum lorem dolor, tristique pretium mollis sit amet, vestibulum facilisis nibh. Vivamus lobortis eros nec luctus mollis. Ut ut consectetur felis. Nullam viverra ex vitae nisl rutrum rhoncus.",
    ],
    textFirst: false,
  } as MediaAndTextDataType,
};

export const TextLeftVideoRightContent: ContentType = {
  type: "media_and_text",
  data: {
    media: {
      type: "video",
      data: {
        id: "qnRqZYEjfkc",
      },
    },
    text: [
      "Morbi ut justo ac sem egestas convallis at id magna. Nullam consequat, risus id fringilla aliquam, ligula sapien varius urna, vitae fermentum lacus eros sit amet mi. Nulla tincidunt leo tellus, vestibulum euismod neque pretium nec. Etiam euismod aliquet elementum. Integer laoreet massa at orci cursus, sed volutpat nunc malesuada. Etiam vehicula ligula sit amet nibh interdum tristique. In ultrices lectus a feugiat volutpat. Suspendisse potenti. Ut et leo ac nisi viverra sagittis vitae sed metus. Nam dignissim facilisis metus, vel pellentesque lacus scelerisque eu.",
      "Duis in convallis ex, eu ultricies arcu. Pellentesque blandit, mauris sed fermentum interdum, purus quam auctor lectus, quis porttitor ex erat vitae nunc. Morbi velit leo, pellentesque pretium blandit nec, finibus ac magna. Vestibulum molestie ipsum vitae pulvinar pharetra. In hac habitasse platea dictumst. Sed finibus augue sit amet dui pulvinar vulputate. Integer et dictum purus, sit amet lacinia quam. Pellentesque velit velit, varius id ante vel, vulputate ultrices justo. Duis a dui sed libero volutpat condimentum.",
      "Suspendisse non magna aliquet, faucibus ipsum vel, pharetra dolor. Pellentesque efficitur magna quis nisi facilisis venenatis. Mauris elementum libero odio, vel pulvinar mauris porttitor ut. Vestibulum dictum rutrum est, id sollicitudin tellus condimentum sit amet. Donec condimentum suscipit viverra. Quisque a nunc dui. Praesent cursus ante quis lacus consequat faucibus. Nulla egestas quis magna eget blandit. Phasellus ut accumsan dolor, eu maximus arcu. Phasellus ullamcorper diam sit amet urna laoreet ultrices.",
      "Nulla pharetra pharetra libero a porttitor. Integer sollicitudin interdum facilisis. Morbi volutpat urna ut nisl sodales, ut suscipit augue fermentum. Cras consectetur non lacus in laoreet. Nullam finibus sollicitudin ipsum, id eleifend mauris aliquam quis. Duis elementum congue erat, auctor ullamcorper leo luctus vel. Morbi et hendrerit ante, at maximus velit. Nam vulputate id nulla quis sodales. Vestibulum lorem dolor, tristique pretium mollis sit amet, vestibulum facilisis nibh. Vivamus lobortis eros nec luctus mollis. Ut ut consectetur felis. Nullam viverra ex vitae nisl rutrum rhoncus.",
    ],
    textFirst: true,
  } as MediaAndTextDataType,
};

export const VideoLeftTextRightContent: ContentType = {
  type: "media_and_text",
  data: {
    media: {
      type: "video",
      data: {
        id: "qnRqZYEjfkc",
      },
    },
    text: [
      "Morbi ut justo ac sem egestas convallis at id magna. Nullam consequat, risus id fringilla aliquam, ligula sapien varius urna, vitae fermentum lacus eros sit amet mi. Nulla tincidunt leo tellus, vestibulum euismod neque pretium nec. Etiam euismod aliquet elementum. Integer laoreet massa at orci cursus, sed volutpat nunc malesuada. Etiam vehicula ligula sit amet nibh interdum tristique. In ultrices lectus a feugiat volutpat. Suspendisse potenti. Ut et leo ac nisi viverra sagittis vitae sed metus. Nam dignissim facilisis metus, vel pellentesque lacus scelerisque eu.",
      "Duis in convallis ex, eu ultricies arcu. Pellentesque blandit, mauris sed fermentum interdum, purus quam auctor lectus, quis porttitor ex erat vitae nunc. Morbi velit leo, pellentesque pretium blandit nec, finibus ac magna. Vestibulum molestie ipsum vitae pulvinar pharetra. In hac habitasse platea dictumst. Sed finibus augue sit amet dui pulvinar vulputate. Integer et dictum purus, sit amet lacinia quam. Pellentesque velit velit, varius id ante vel, vulputate ultrices justo. Duis a dui sed libero volutpat condimentum.",
      "Suspendisse non magna aliquet, faucibus ipsum vel, pharetra dolor. Pellentesque efficitur magna quis nisi facilisis venenatis. Mauris elementum libero odio, vel pulvinar mauris porttitor ut. Vestibulum dictum rutrum est, id sollicitudin tellus condimentum sit amet. Donec condimentum suscipit viverra. Quisque a nunc dui. Praesent cursus ante quis lacus consequat faucibus. Nulla egestas quis magna eget blandit. Phasellus ut accumsan dolor, eu maximus arcu. Phasellus ullamcorper diam sit amet urna laoreet ultrices.",
      "Nulla pharetra pharetra libero a porttitor. Integer sollicitudin interdum facilisis. Morbi volutpat urna ut nisl sodales, ut suscipit augue fermentum. Cras consectetur non lacus in laoreet. Nullam finibus sollicitudin ipsum, id eleifend mauris aliquam quis. Duis elementum congue erat, auctor ullamcorper leo luctus vel. Morbi et hendrerit ante, at maximus velit. Nam vulputate id nulla quis sodales. Vestibulum lorem dolor, tristique pretium mollis sit amet, vestibulum facilisis nibh. Vivamus lobortis eros nec luctus mollis. Ut ut consectetur felis. Nullam viverra ex vitae nisl rutrum rhoncus.",
    ],
    textFirst: false,
  } as MediaAndTextDataType,
};
