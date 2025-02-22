import { SectionType } from "../types/section";

const section1 = [
  {
    type: "heading",
    data: { text: "Lorem Ipsum" },
  },
  {
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
    },
  },
  {
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
    },
  },
];

const section2 = [
  {
    type: "heading",
    data: { text: "Dolor Sit Amet" },
  },
  {
    type: "images_with_captions",
    data: [
      {
        src: "https://coding-with-callie.s3.us-east-1.amazonaws.com/placeholder.jpg",
        alt: "Placeholder",
        caption: "Morbi ut justo ac sem egestas convallis at id magna",
      },
      // {
      //   src: "https://coding-with-callie.s3.us-east-1.amazonaws.com/placeholder.jpg",
      //   alt: "Placeholder",
      //   caption:
      //     "Nullam consequat, risus id fringilla aliquam, ligula sapien varius urna",
      // },
      // {
      //   src: "https://coding-with-callie.s3.us-east-1.amazonaws.com/placeholder.jpg",
      //   alt: "Placeholder",
      //   caption:
      //     "Nulla tincidunt leo tellus, vestibulum euismod neque pretium nec",
      // },
      // {
      //   src: "https://coding-with-callie.s3.us-east-1.amazonaws.com/placeholder.jpg",
      //   alt: "Placeholder",
      //   caption: "Etiam euismod aliquet elementum",
      // },
    ],
  },
];

const section3 = [
  {
    type: "heading",
    data: { text: "Dolor Sit Amet" },
  },
  {
    type: "video",
    data: {
      id: "qnRqZYEjfkc",
    },
  },
  {
    type: "text",
    data: [
      "Morbi ut justo ac sem egestas convallis at id magna. Nullam consequat, risus id fringilla aliquam, ligula sapien varius urna, vitae fermentum lacus eros sit amet mi. Nulla tincidunt leo tellus, vestibulum euismod neque pretium nec. Etiam euismod aliquet elementum. Integer laoreet massa at orci cursus sed volutpat nunc malesuada. Etiam vehicula ligula sit amet nibh interdum tristique. In ultrices lectus a feugiat volutpat. Suspendisse potenti. Ut et leo ac nisi viverra sagittis vitae sed metus. Nam dignissim facilisis metus, vel pellentesque lacus scelerisque eu.",
      "Duis in convallis ex, eu ultricies arcu. Pellentesque blandit, mauris sed fermentum interdum, purus quam auctor lectus, quis porttitor ex erat vitae nunc. Morbi velit leo, pellentesque pretium blandit nec, finibus ac magna. Vestibulum molestie ipsum vitae pulvinar pharetra. In hac habitasse platea dictumst. Sed finibus augue sit amet dui pulvinar vulputate. Integer et dictum purus, sit amet lacinia quam. Pellentesque velit velit, varius id ante vel, vulputate ultrices justo. Duis a dui sed libero volutpat condimentum. Integer laoreet massa at orci cursus, sed volutpat nunc malesuada. Etiam vehicula ligula sit amet nibh interdum tristique. In ultrices lectus a feugiat volutpat. Suspendisse potenti. Ut et leo ac nisi viverra sagittis vitae sed metus. Nam dignissim facilisis metus, vel pellentesque lacus scelerisque eu.",
    ],
  },
];

export const sections = [
  {
    type: "content",
    data: section1,
  },
  {
    type: "content",
    data: section2,
  },
  {
    type: "content",
    data: section3,
  },
] as SectionType[];
