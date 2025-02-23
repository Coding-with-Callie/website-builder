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

const SectionsToAdd = () => {
  const [open, setOpen] = useState(false);

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
          <HStack w="100%" gap={4}>
            <Box borderWidth={1} borderRadius="sm">
              <Image src={HeadingPhoto} alt="placeholder" borderRadius="sm" />
            </Box>
          </HStack>
        </VStack>
        <VStack gap={4} mb={4}>
          <Heading type="section" textAlign="left" w="100%">
            Text
          </Heading>
          <HStack w="100%" gap={4}>
            <Box borderWidth={1} borderRadius="sm">
              <Image src={TextPhoto} alt="placeholder" borderRadius="sm" />
            </Box>
          </HStack>
        </VStack>
        <VStack gap={4} mb={4}>
          <Heading type="section" textAlign="left" w="100%">
            Images
          </Heading>
          <HStack w="100%" gap={4}>
            <Box borderWidth={1} borderRadius="sm">
              <Image src={OneImage} alt="placeholder" borderRadius="sm" />
            </Box>
            <Box borderWidth={1} borderRadius="sm">
              <Image src={TwoImages} alt="placeholder" borderRadius="sm" />
            </Box>
          </HStack>
          <HStack w="100%" gap={4}>
            <Box borderWidth={1} borderRadius="sm">
              <Image src={ThreeImages} alt="placeholder" borderRadius="sm" />
            </Box>
            <HStack
              borderWidth={1}
              borderRadius="sm"
              height="100%"
              justifyContent={"center"}
            >
              <Image src={FourImages} alt="placeholder" borderRadius="sm" />
            </HStack>
          </HStack>
        </VStack>
        <VStack gap={4} mb={4}>
          <Heading type="section" textAlign="left" w="100%">
            Images with Captions
          </Heading>
          <HStack w="100%" gap={4}>
            <Box borderWidth={1} borderRadius="sm">
              <Image
                src={OneImageWithCaption}
                alt="placeholder"
                borderRadius="sm"
              />
            </Box>
            <Box borderWidth={1} borderRadius="sm">
              <Image
                src={TwoImagesWithCaptions}
                alt="placeholder"
                borderRadius="sm"
              />
            </Box>
          </HStack>
          <HStack w="100%" gap={4}>
            <Box borderWidth={1} borderRadius="sm">
              <Image
                src={ThreeImagesWithCaptions}
                alt="placeholder"
                borderRadius="sm"
              />
            </Box>
            <HStack
              borderWidth={1}
              borderRadius="sm"
              height="100%"
              justifyContent={"center"}
            >
              <Image
                src={FourImagesWithCaptions}
                alt="placeholder"
                borderRadius="sm"
              />
            </HStack>
          </HStack>
        </VStack>
        <VStack gap={4} mb={4}>
          <Heading type="section" textAlign="left" w="100%">
            Video
          </Heading>
          <HStack w="100%" gap={4}>
            <Box borderWidth={1} borderRadius="sm">
              <Image src={Video} alt="placeholder" borderRadius="sm" />
            </Box>
            <Box borderWidth={1} borderRadius="sm">
              <Image
                src={VideoWithCaption}
                alt="placeholder"
                borderRadius="sm"
              />
            </Box>
          </HStack>
        </VStack>
        <VStack gap={4} mb={4}>
          <Heading type="section" textAlign="left" w="100%">
            Text and Image
          </Heading>
          <HStack w="100%" gap={4}>
            <Box borderWidth={1} borderRadius="sm">
              <Image
                src={TextLeftImageRight}
                alt="placeholder"
                borderRadius="sm"
              />
            </Box>
            <Box borderWidth={1} borderRadius="sm">
              <Image
                src={ImageLeftTextRight}
                alt="placeholder"
                borderRadius="sm"
              />
            </Box>
          </HStack>
          <HStack w="100%" gap={4}>
            <Box borderWidth={1} borderRadius="sm">
              <Image
                src={TextLeftLargeImageRight}
                alt="placeholder"
                borderRadius="sm"
              />
            </Box>
            <Box borderWidth={1} borderRadius="sm">
              <Image
                src={LargeImageLeftTextRight}
                alt="placeholder"
                borderRadius="sm"
              />
            </Box>
          </HStack>
        </VStack>
        <VStack gap={4}>
          <Heading type="section" textAlign="left" w="100%">
            Text and Video
          </Heading>
          <HStack w="100%" gap={4}>
            <Box borderWidth={1} borderRadius="sm">
              <Image
                src={TextLeftVideoRight}
                alt="placeholder"
                borderRadius="sm"
              />
            </Box>
            <Box borderWidth={1} borderRadius="sm">
              <Image
                src={VideoLeftTextRight}
                alt="placeholder"
                borderRadius="sm"
              />
            </Box>
          </HStack>
        </VStack>
      </Modal>
    </>
  );
};

export default SectionsToAdd;
