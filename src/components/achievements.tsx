import * as React from "react";
import {
  FiPackage,
  FiHome,
  FiEdit2,
  FiUsers,
  FiBarChart2,
  FiGlobe,
} from "react-icons/fi";
import {
  FaGraduationCap,
  FaMobile
} from "react-icons/fa";
import { VStack, Heading, Box, Link, LinkProps } from "@chakra-ui/react";
import { TimelineItem } from "./Timeline";
import { PageSlideFade } from "./page-transitions";
import { Link as NavLink } from "react-router-dom";
import Header from "./header";

interface ExternalLinkProps extends LinkProps {
  url: string;
  linkProps?: LinkProps;
  text: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <Link href={url} {...linkProps} {...props}>
      {text}
    </Link>
  );
};

const InternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <Link as={NavLink} to={url} {...linkProps} {...props}>
      {text}
    </Link>
  );
};
const Achievements = () => {
  return (
    <PageSlideFade>
      <Box align="start" mb={6}>
        <Header mt={0} mb={0}>
          Achievements
        </Header>
      </Box>
      <VStack textAlign="start" align="start" mb={5}>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2022
          </Heading>
          <Box>
            <TimelineItem icon={FiGlobe}>Created my portfolio website based on an github open source project</TimelineItem>
            <TimelineItem icon={FaGraduationCap}>
              Graduated from La Capsule 🚀 {" "}
            </TimelineItem>
            <TimelineItem icon={FaMobile}>
            Developed my first React native App{" "}
            </TimelineItem>
            <TimelineItem icon={FiBarChart2} >
              Learned how to code in JavaScript{" "}
            </TimelineItem>
            
          </Box>
        </Box>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2021
          </Heading>
          <Box>
            <TimelineItem icon={FaGraduationCap} skipTrail>
              Graduated from Paris Dauphine University 🐬 {" "}
            </TimelineItem>
          </Box>
        </Box>
      </VStack>
    </PageSlideFade>
  );
};

export default Achievements;
