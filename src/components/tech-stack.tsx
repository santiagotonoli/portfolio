import * as React from "react";
import { useState } from "react";
import {
  Icon,
  VStack,
  HStack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
  SimpleGrid
} from "@chakra-ui/react";
import {
  FaEthereum
} from "react-icons/fa";
import { PageSlideFade } from "./page-transitions";
import Section from "./section";
import { AiTwotoneThunderbolt, AiOutlineCloudServer } from "react-icons/ai";
import { BiDesktop } from "react-icons/bi";
import { GiSpiderWeb } from "react-icons/gi";
import SkillCard from "./skill-card";
import { skills } from "data/data";
import Header from "./header";
import { MotionBox } from "./motion";
import { container } from "./page-transitions";

const TechStack = () => {
  const [skillsList, setSkillsList] = useState([]);

  React.useEffect(() => {
    setSkillsList(skills);
  }, []);

  const filterSkills = tab => {
    console.log(skills.filter(skill => skill.type === tab));
    if (tab.length) setSkillsList(skills.filter(skill => skill.type === tab));
    else setSkillsList(skills);
  };

  return (
    <PageSlideFade>
      <VStack spacing={8}>
        <Section>
          <VStack>
            <Header mt={0} mb={1}>
              Tech Stack
            </Header>
            <Text
              fontSize={"xl"}
              color={useColorModeValue("gray.500", "gray.200")}
              maxW="lg"
              textAlign="center"
            >
              A list of my favorite tools and technologies that I use on a
              regular basis.
            </Text>
          </VStack>
        </Section>
        <Section>
          <Tabs
            variant="soft-rounded"
            colorScheme="blue"
            align="center"
            w="100%"
          >
            <TabList display="flex" flexWrap="wrap">
              <Tab
                bg={useColorModeValue("gray.100", "gray.800")}
                color={useColorModeValue("gray.600", "gray.500")}
                _selected={{
                  color: "green.800",
                  bg: "green.100"
                }}
                mr={2}
                mt={2}
                onClick={() => filterSkills("")}
              >
                <HStack spacing={1}>
                  <Icon as={AiTwotoneThunderbolt} />
                  <Text>All</Text>
                </HStack>
              </Tab>
              <Tab
                bg={useColorModeValue("gray.100", "gray.800")}
                color={useColorModeValue("gray.500", "gray.500")}
                _selected={{
                  color: useColorModeValue("gray.100", "gray.800"),
                  bg: useColorModeValue("gray.900", "gray.100")
                }}
                mr={2}
                mt={2}
                onClick={() => filterSkills("web3")}
              >
                <HStack spacing={1}>
                  <Icon as={FaEthereum} />
                  <Text>Web3</Text>
                </HStack>
              </Tab>
              <Tab
                bg={useColorModeValue("gray.100", "gray.800")}
                color={useColorModeValue("gray.500", "gray.500")}
                _selected={{
                  color: useColorModeValue("gray.100", "gray.800"),
                  bg: useColorModeValue("gray.900", "gray.100")
                }}
                mr={2}
                mt={2}
                onClick={() => filterSkills("development")}
              >
                <HStack spacing={1}>
                  <Icon as={BiDesktop} />
                  <Text>Web Development</Text>
                </HStack>
              </Tab>
              <Tab
                bg={useColorModeValue("gray.100", "gray.800")}
                color={useColorModeValue("gray.600", "gray.500")}
                _selected={{
                  color: "green.800",
                  bg: "green.100"
                }}
                mr={2}
                mt={2}
                onClick={() => filterSkills("design")}
              >
                <HStack spacing={1}>
                  <Icon as={GiSpiderWeb} />
                  <Text>Web Design</Text>
                </HStack>
              </Tab>
              <Tab
                bg={useColorModeValue("gray.100", "gray.800")}
                color={useColorModeValue("gray.600", "gray.500")}
                _selected={{
                  color: "red.800",
                  bg: "red.100"
                }}
                mr={2}
                mt={2}
                onClick={() => filterSkills("devops")}
              >
                <HStack spacing={1}>
                  <Icon as={AiOutlineCloudServer} />
                  <Text>Devops</Text>
                </HStack>
              </Tab>
            </TabList>
            <TabPanels minHeight={"45vh"}>
              <TabPanel px={0}>
                <MotionBox
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={8}>
                    {skillsList.map((tool, index) => (
                      <SkillCard
                        key={index}
                        name={tool.name}
                        description={tool.description}
                        image={tool.image}
                        platform={"web"}
                        link={tool.link}
                      />
                    ))}
                  </SimpleGrid>
                </MotionBox>
              </TabPanel>
              <TabPanel px={0}>
                <MotionBox
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                    {skillsList.map((tool, index) => (
                      <SkillCard
                        key={index}
                        name={tool.name}
                        description={tool.description}
                        image={tool.image}
                        platform={"web"}
                        link={tool.link}
                      />
                    ))}
                  </SimpleGrid>
                </MotionBox>
              </TabPanel>
              <TabPanel px={0}>
                <MotionBox
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                    {skillsList.map((tool, index) => (
                      <SkillCard
                        key={index}
                        name={tool.name}
                        description={tool.description}
                        image={tool.image}
                        platform={"web"}
                        link={tool.link}
                      />
                    ))}
                  </SimpleGrid>
                </MotionBox>
              </TabPanel>
              <TabPanel px={0}>
                <MotionBox
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                    {skillsList.map((tool, index) => (
                      <SkillCard
                        key={index}
                        name={tool.name}
                        description={tool.description}
                        image={tool.image}
                        platform={"web"}
                        link={tool.link}
                      />
                    ))}
                  </SimpleGrid>
                </MotionBox>
              </TabPanel>
              <TabPanel px={0}>
                <MotionBox
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                    {skillsList.map((tool, index) => (
                      <SkillCard
                        key={index}
                        name={tool.name}
                        description={tool.description}
                        image={tool.image}
                        platform={"web"}
                        link={tool.link}
                      />
                    ))}
                  </SimpleGrid>
                </MotionBox>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Section>
      </VStack>
    </PageSlideFade>
  );
};

export default TechStack;
