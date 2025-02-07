import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { GrGithub, GrLinkedin, GrMail, GrYoutube } from "react-icons/gr";
import { button, lightenByPercentage } from "../style/theme";

type Props = {
  type: string;
};

const links = {
  linkedin: "https://www.linkedin.com/in/cstoscup/",
  youtube: "https://www.youtube.com/@codingwithcallie",
  github: "https://github.com/cstoscup",
  mail: "/contact",
};

const SocialMediaButton = ({ type }: Props) => {
  const [color, setColor] = useState(button);

  const handleClick = () => {
    switch (type) {
      case "linkedin":
        window.open(links.linkedin, "_blank");
        break;
      case "youtube":
        window.open(links.youtube, "_blank");
        break;
      case "github":
        window.open(links.github, "_blank");
        break;
      case "mail":
        window.location.href = "mailto:calliestoscup@gmail.com";
        break;
    }
  };

  return (
    <Box
      border="2px"
      borderStyle="solid"
      borderColor={color}
      borderRadius="50%"
      p={2}
      onClick={handleClick}
      onMouseEnter={() => setColor(lightenByPercentage(button, -20))}
      onMouseLeave={() => setColor(button)}
      onMouseDown={() => setColor(lightenByPercentage(button, -40))}
    >
      {type === "linkedin" && <GrLinkedin color={color} size={20} />}
      {type === "youtube" && <GrYoutube color={color} size={20} />}
      {type === "github" && <GrGithub color={color} size={20} />}
      {type === "mail" && <GrMail color={color} size={20} />}
    </Box>
  );
};

export default SocialMediaButton;
