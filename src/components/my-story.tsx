import * as React from "react";
import {
  Text,
  VStack,
  Heading,
  Box,
  Image,
  HStack,
  Divider
} from "@chakra-ui/react";
import { StoryTimeline } from "./story-timeline";
import placeholder from "assets/images/placeholder.png";
import { story } from "data/data";
import Header from "./header";
import Section from "./section";
import { PageSlideFade } from "./page-transitions";

const MyStory = () => {


  return (

    
    <VStack>
      <Section mb={100}>
        <PageSlideFade>
          <VStack justify={"start"}>
            <Header mt={0} mb={1}>
              My developer journey
            </Header>
          </VStack>
        </PageSlideFade>
      </Section>
      <VStack textAlign="start" align="flex-start">
        <Box>
          {story.map((institutes, index) => (
            
            <StoryTimeline

              icon={institutes.icon}
              index={index}
            >
              {" "}
              <HStack>
                <Image
                  rounded="full"
                  w={[6, 8]}
                  h={[6, 8]}
                  objectFit="cover"
                  fallbackSrc={placeholder}
                  src={institutes.logo}
                  alt={institutes.alt}
                />
                <VStack align="start">
                  <Heading
                    fontSize={[12, 13, 15]}
                    lineHeight="shorter"
                    fontWeight="bold"
                  >
                    <Box>{institutes.title}</Box>
                    <Box mt={1}>{institutes.period}</Box>
                  </Heading>
                </VStack>
              </HStack>
              <Divider my={2} />
              <Text fontSize={[12, 13, 15]}>{institutes.role}</Text>
            </StoryTimeline>
          ))}
        </Box>
      </VStack>
    </VStack>
  );
};

export default MyStory;
