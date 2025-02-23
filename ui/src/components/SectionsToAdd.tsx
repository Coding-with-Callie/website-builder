import { Box, Button, HStack, Image, VStack } from "@chakra-ui/react";
import { Section } from "../style/section-recipe";
import Modal from "./Modal";
import { useState } from "react";
import TextLeftImageRight from "../assets/TextLeftImageRight.png";
import ImageLeftTextRight from "../assets/ImageLeftTextRight.png";
import TextLeftLargeImageRight from "../assets/TextLeftLargeImageRight.png";
import LargeImageLeftTextRight from "../assets/LargeImageLeftTextRight.png";
import TextLeftVideoRight from "../assets/TextLeftVideoRight.png";
import VideoLeftTextRight from "../assets/VideoLeftTextRight.png";
import HeadingPhoto from "../assets/Heading.png";
import TextPhoto from "../assets/Text.png";
import OneImage from "../assets/OneImage.png";
import TwoImages from "../assets/TwoImages.png";
import ThreeImages from "../assets/ThreeImages.png";
import FourImages from "../assets/FourImages.png";
import OneImageWithCaption from "../assets/OneImageWithCaption.png";
import TwoImagesWithCaptions from "../assets/TwoImagesWithCaptions.png";
import ThreeImagesWithCaptions from "../assets/ThreeImagesWithCaptions.png";
import FourImagesWithCaptions from "../assets/FourImagesWithCaptions.png";
import Video from "../assets/Video.png";
import VideoWithCaption from "../assets/VideoWithCaption.png";
import { Heading } from "../style/heading-recipe";
import { text } from "../style/theme";

const ContentChoiceWrapper = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <HStack
    w="100%"
    borderWidth={1}
    borderRadius="sm"
    _hover={{ cursor: "pointer" }}
    position="relative"
    height="100%"
    justifyContent={"center"}
    onClick={onClick}
  >
    <Box
      position="absolute"
      zIndex="1"
      backgroundColor={text}
      width="100%"
      height="100%"
      opacity={0}
      _hover={{ opacity: 0.15 }}
      borderRadius={"sm"}
      borderWidth={1}
    ></Box>
    {children}
  </HStack>
);

const SectionsToAdd = () => {
  const [open, setOpen] = useState(false);
  const [contentChoice, setContentChoice] = useState<string | null>(null);

  console.log("contentChoice", contentChoice);

  return (
    <>
      <Section>
        <HStack justifyContent="center">
          <Button onClick={() => setOpen(true)}>Add Content</Button>
          <Button>Save Section</Button>
        </HStack>
      </Section>
      <Modal open={open} setOpen={setOpen} size="cover">
        <Heading textAlign="center" mb={4}>
          What type of content would you like to add?
        </Heading>
        <VStack gap={4} mb={4}>
          <Heading type="section" textAlign="left" w="100%">
            Heading
          </Heading>
          <ContentChoiceWrapper onClick={() => setContentChoice("heading")}>
            <Image src={HeadingPhoto} alt="placeholder" borderRadius="sm" />
          </ContentChoiceWrapper>
        </VStack>
        <VStack gap={4} mb={4}>
          <Heading type="section" textAlign="left" w="100%">
            Text
          </Heading>
          <ContentChoiceWrapper onClick={() => setContentChoice("text")}>
            <Image src={TextPhoto} alt="placeholder" borderRadius="sm" />
          </ContentChoiceWrapper>
        </VStack>
        <VStack gap={4} mb={4}>
          <Heading type="section" textAlign="left" w="100%">
            Images
          </Heading>
          <HStack w="100%" gap={4}>
            <ContentChoiceWrapper onClick={() => setContentChoice("one-image")}>
              <Image src={OneImage} alt="placeholder" borderRadius="sm" />
            </ContentChoiceWrapper>
            <ContentChoiceWrapper
              onClick={() => setContentChoice("two-images")}
            >
              <Image src={TwoImages} alt="placeholder" borderRadius="sm" />
            </ContentChoiceWrapper>
          </HStack>
          <HStack w="100%" gap={4}>
            <ContentChoiceWrapper
              onClick={() => setContentChoice("three-images")}
            >
              <Image src={ThreeImages} alt="placeholder" borderRadius="sm" />
            </ContentChoiceWrapper>
            <ContentChoiceWrapper
              onClick={() => setContentChoice("four-images")}
            >
              <Image src={FourImages} alt="placeholder" borderRadius="sm" />
            </ContentChoiceWrapper>
          </HStack>
        </VStack>
        <VStack gap={4} mb={4}>
          <Heading type="section" textAlign="left" w="100%">
            Images with Captions
          </Heading>
          <HStack w="100%" gap={4}>
            <ContentChoiceWrapper
              onClick={() => setContentChoice("one-image-with-caption")}
            >
              <Image
                src={OneImageWithCaption}
                alt="placeholder"
                borderRadius="sm"
              />
            </ContentChoiceWrapper>
            <ContentChoiceWrapper
              onClick={() => setContentChoice("two-images-with-captions")}
            >
              <Image
                src={TwoImagesWithCaptions}
                alt="placeholder"
                borderRadius="sm"
              />
            </ContentChoiceWrapper>
          </HStack>
          <HStack w="100%" gap={4}>
            <ContentChoiceWrapper
              onClick={() => setContentChoice("three-images-with-captions")}
            >
              <Image
                src={ThreeImagesWithCaptions}
                alt="placeholder"
                borderRadius="sm"
              />
            </ContentChoiceWrapper>
            <ContentChoiceWrapper
              onClick={() => setContentChoice("four-images-with-captions")}
            >
              <Image
                src={FourImagesWithCaptions}
                alt="placeholder"
                borderRadius="sm"
              />
            </ContentChoiceWrapper>
          </HStack>
        </VStack>
        <VStack gap={4} mb={4}>
          <Heading type="section" textAlign="left" w="100%">
            Video
          </Heading>
          <HStack w="100%" gap={4}>
            <ContentChoiceWrapper onClick={() => setContentChoice("video")}>
              <Image src={Video} alt="placeholder" borderRadius="sm" />
            </ContentChoiceWrapper>
            <ContentChoiceWrapper
              onClick={() => setContentChoice("video-with-caption")}
            >
              <Image
                src={VideoWithCaption}
                alt="placeholder"
                borderRadius="sm"
              />
            </ContentChoiceWrapper>
          </HStack>
        </VStack>
        <VStack gap={4} mb={4}>
          <Heading type="section" textAlign="left" w="100%">
            Text and Image
          </Heading>
          <HStack w="100%" gap={4}>
            <ContentChoiceWrapper
              onClick={() => setContentChoice("text-left-image-right")}
            >
              <Image
                src={TextLeftImageRight}
                alt="placeholder"
                borderRadius="sm"
              />
            </ContentChoiceWrapper>
            <ContentChoiceWrapper
              onClick={() => setContentChoice("image-left-text-right")}
            >
              <Image
                src={ImageLeftTextRight}
                alt="placeholder"
                borderRadius="sm"
              />
            </ContentChoiceWrapper>
          </HStack>
          <HStack w="100%" gap={4}>
            <ContentChoiceWrapper
              onClick={() => setContentChoice("text-left-large-image-right")}
            >
              <Image
                src={TextLeftLargeImageRight}
                alt="placeholder"
                borderRadius="sm"
              />
            </ContentChoiceWrapper>
            <ContentChoiceWrapper
              onClick={() => setContentChoice("large-image-left-text-right")}
            >
              <Image
                src={LargeImageLeftTextRight}
                alt="placeholder"
                borderRadius="sm"
              />
            </ContentChoiceWrapper>
          </HStack>
        </VStack>
        <VStack gap={4}>
          <Heading type="section" textAlign="left" w="100%">
            Text and Video
          </Heading>
          <HStack w="100%" gap={4}>
            <ContentChoiceWrapper
              onClick={() => setContentChoice("text-left-video-right")}
            >
              <Image
                src={TextLeftVideoRight}
                alt="placeholder"
                borderRadius="sm"
              />
            </ContentChoiceWrapper>
            <ContentChoiceWrapper
              onClick={() => setContentChoice("video-left-text-right")}
            >
              <Image
                src={VideoLeftTextRight}
                alt="placeholder"
                borderRadius="sm"
              />
            </ContentChoiceWrapper>
          </HStack>
        </VStack>
      </Modal>
    </>
  );
};

export default SectionsToAdd;
