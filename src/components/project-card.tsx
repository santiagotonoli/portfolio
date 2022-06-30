import * as React from "react";
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Tag,
  Link,
} from "@chakra-ui/react";

import { motion, AnimatePresence } from "framer-motion";
import { getTagColor } from "style/theme";
import LazyImage from "./lazy-image";

interface ProjectCardProps {
  title: string;
  description: string[];
  logo: string;
  blurHash: string;
  link: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  logo,
  blurHash,
  link,
  technologies,
}) => {
  const textColor = useColorModeValue("gray.500", "gray.200");
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);


  return (
    <motion.div layout onClick={toggleOpen}>
      <HStack
        p={4}
        bg={useColorModeValue("white", "gray.800")}
        rounded="xl"
        borderWidth="1px"
        borderColor={useColorModeValue("gray.100", "gray.700")}
        w="100%"
        h="100%"
        textAlign="left"
        align="start"
        spacing={4}
        cursor="pointer"
        _hover={{ shadow: "lg" }}
      >
        <LazyImage
          src={logo}
          blurHash={blurHash}
          size="sm"
          width={33}
          height={33}
          layout="fixed"
          rounded="md"
        />
        <VStack align="start">
          <VStack spacing={0} align="start">
            <motion.div layout>
              <HStack wrap="wrap">
                  <Text
                    as={Link}
                    href={link}
                    fontWeight="bold"
                    fontSize="md"
                    onClick={e => e.stopPropagation()}
                    isExternal
                  >
                    {title}
                  </Text>
                  <HStack wrap="wrap" spacing={1}>
                    {technologies.map(tech => (
                      <Tag size="sm" colorScheme={getTagColor(tech)} mb={1}>
                        {tech}
                      </Tag>
                    ))}
                  </HStack>
                
              </HStack>
              
            </motion.div>
            <AnimatePresence>
              <motion.div
                layout
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
              >
                {!isOpen && (
                  
                  <Text fontSize="sm" color={textColor} noOfLines={{ base: 2 }}>
                    {description[0]} ...
                  </Text>
                )}
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
              >
                {isOpen && 

                 description.map(desc => (
                   desc === "Achievements:" ? (
                  <Text fontSize="sm" color={textColor} marginTop="5" fontWeight={"bold"}>
                    {desc}
                  </Text>):<Text fontSize="sm" color={textColor} marginTop="2">
                    {desc}
                  </Text>
                ))}
                
              </motion.div>
            </AnimatePresence>
          </VStack>
        </VStack>
      </HStack>
    </motion.div>
  );
};

export default ProjectCard;
