import * as React from "react";
import {
  VStack,
  Text,
  Heading,
  Box,
  Center,
  HStack,
  Icon,
  StackProps,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Img,
} from "@chakra-ui/react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import {
  SiJavascript,
  SiCplusplus,
  SiTypescript,
  SiNodedotjs,
  SiGit,
  SiGatsby,
} from "react-icons/si";
import { motion } from "framer-motion";
const MotionStack = motion<StackProps>(VStack);

const IndexPage: React.FC<{ children }> = ({ children }) => {
  return (
    <Box
      padding={10}
      minH={"100vh"}
      bgGradient={"linear(#A9E4EF 30%, #A934EF 80%)"}
    >
      <Tabs align={"end"} variant={"enclosed"}>
        <TabList>
          <Tab>About Me</Tab>
          <Tab>Skills</Tab>
          <Tab>Projects</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <MotionStack
              initial={"hidden"}
              animate={"visible"}
              exit={"exit"}
              justifyContent={"center"}
            >
              <Center>
                <Heading fontSize={"8em"}>Jabali Ndungu</Heading>
              </Center>
              <Center>
                <Text fontWeight={"semibold"} fontSize={"3em"}>
                  Full-Stack Software Developer
                </Text>
              </Center>
              <Box mx={"auto"} w={"50%"} textAlign={"left"}>
                <Text>
                  I'm a full-stack developer in Vancouver, BC, Canada with 4
                  years of programming experience. I primarily focus on
                  programming in React on the frontend (with both JavaScript and
                  TypeScript) while I use Node.js on the backend for most
                  projects.
                </Text>
              </Box>
              <HStack>
                <Icon
                  aria-label={"linkedin-account"}
                  as={AiOutlineLinkedin}
                  w={30}
                  h={30}
                />
                <Icon
                  aria-label={"github-account"}
                  as={AiOutlineGithub}
                  w={30}
                  h={30}
                />
              </HStack>
            </MotionStack>
          </TabPanel>
          <TabPanel>
            <MotionStack>
              <Center>
                <Heading>Skills</Heading>
              </Center>
              <HStack w={"80%"} spacing={30} justifyContent={"space-around"}>
                <Icon
                  aria-label={"node-logo"}
                  as={SiNodedotjs}
                  w={"5em"}
                  h={"5em"}
                />
                <Icon
                  aria-label={"gatsby-logo"}
                  as={SiGatsby}
                  w={"5em"}
                  h={"5em"}
                />
                <Icon
                  aria-label={"typescript-logo"}
                  as={SiTypescript}
                  w={"5em"}
                  h={"5em"}
                />
                <Icon
                  aria-label={"javascript-logo"}
                  as={SiJavascript}
                  w={"5em"}
                  h={"5em"}
                />
                <Icon
                  aria-label={"cplusplus-logo"}
                  as={SiCplusplus}
                  w={"5em"}
                  h={"5em"}
                />
                <Icon aria-label={"git-logo"} as={SiGit} w={"5em"} h={"5em"} />
              </HStack>
            </MotionStack>
          </TabPanel>
          <TabPanel>
            <VStack>
              <Center>
                <Heading>Projects</Heading>
              </Center>
              <HStack justifyContent={"space-between"} wrap={"wrap"}>
                <Box
                  borderColor={"black"}
                  maxW={"md"}
                  borderWidth={1}
                  borderRadius={"md"}
                  p={5}
                >
                  <Img src={""} />
                  <Heading textAlign={"center"}>
                    Commissions by Lokal Creatives
                  </Heading>
                  <Text>
                    A web app for artists to run subscriptions and sell art
                    commissions.
                  </Text>
                </Box>
                <Box
                  borderColor={"black"}
                  maxW={"md"}
                  borderWidth={1}
                  borderRadius={"md"}
                  p={5}
                >
                  <Img src={""} />
                  <Heading>Mentions</Heading>
                  <Text>Simple advanced search for Reddit.</Text>
                </Box>
              </HStack>
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default IndexPage;
