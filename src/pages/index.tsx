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
  Button,
} from "@chakra-ui/react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import {
  SiJavascript,
  SiCplusplus,
  SiTypescript,
  SiNodedotjs,
  SiGit,
  SiGatsby,
  SiReact,
} from "react-icons/si";
import { motion } from "framer-motion";
import Lokal from "../images/lokal.png";
import Mentions from "../images/mentions.png";
import { IconBase } from "react-icons/lib";
const MotionStack = motion<StackProps>(VStack);

const IndexPage: React.FC<{ children }> = ({ children }) => {
  return (
    <Box
      padding={10}
      minH={"100vh"}
      bgGradient={"linear(#feada6, #f5efef)"}
    >
      <Tabs
        align={"end"}
        variant={"soft-rounded"}
        borderColor={"black"}
        colorScheme={"gray"}
      >
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
              pt={20}
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
                  I'm a full-stack developer (who also writes) in Vancouver,
                  Canada with 4 years of programming experience. I primarily
                  focus on programming in React on the frontend (with both
                  JavaScript and TypeScript) while I use Node.js on the backend
                  for most projects. I write documentation, articles about APIs, and I
                  copy-edit technical books too! Contact me using the buttons
                  below if you'd like to chat.
                </Text>
              </Box>
              <HStack pt={50}>
                <a
                  href={"https://www.linkedin.com/in/jabali-ndungu/"}
                  target={"_blank"}
                >
                  <Icon
                    aria-label={"linkedin-account"}
                    as={AiOutlineLinkedin}
                    w={30}
                    h={30}
                  />
                </a>
                <a href={"https://www.github.com/weaponxii"} target={"_blank"}>
                  <Icon
                    aria-label={"github-account"}
                    as={AiOutlineGithub}
                    w={30}
                    h={30}
                  />
                </a>
                <a href={"mailto:jabali.ndu@gmail.com?subject=Mail from Portfolio"}>
                  <Icon aria-label={"email"} as={AiOutlineMail} w={30} h={30} />
                </a>
              </HStack>
            </MotionStack>
          </TabPanel>
          <TabPanel>
            <MotionStack>
              <Center>
                <Heading>Skills</Heading>
              </Center>
              <HStack
                w={"80%"}
                spacing={30}
                justifyContent={"space-around"}
                p={20}
              >
                <Box alignContent={"center"}>
                  <Icon
                    aria-label={"node-logo"}
                    as={SiNodedotjs}
                    w={"5em"}
                    h={"5em"}
                  />
                  <Text textAlign={"center"}>Node.js</Text>
                </Box>
                <Box alignContent={"center"}>
                  <Icon
                    aria-label={"node-logo"}
                    as={SiReact}
                    w={"5em"}
                    h={"5em"}
                  />
                  <Text textAlign={"center"}>React</Text>
                </Box>
                <Box alignContent={"center"}>
                  <Icon
                    aria-label={"gatsby-logo"}
                    as={SiGatsby}
                    w={"5em"}
                    h={"5em"}
                  />
                  <Text textAlign={"center"}>Gatsby</Text>
                </Box>
                <Box alignContent={"center"}>
                  {" "}
                  <Icon
                    aria-label={"typescript-logo"}
                    as={SiTypescript}
                    w={"5em"}
                    h={"5em"}
                  />
                  <Text textAlign={"center"}>TypeScript</Text>
                </Box>
                <Box alignContent={"center"}>
                  <Icon
                    aria-label={"javascript-logo"}
                    as={SiJavascript}
                    w={"5em"}
                    h={"5em"}
                  />
                  <Text textAlign={"center"}>JavaScript</Text>
                </Box>
                <Box alignContent={"center"}>
                  <Icon
                    aria-label={"cplusplus-logo"}
                    as={SiCplusplus}
                    w={"5em"}
                    h={"5em"}
                  />
                  <Text textAlign={"center"}>C++</Text>
                </Box>
                <Box alignContent={"center"}>
                  <Icon
                    aria-label={"git-logo"}
                    as={SiGit}
                    w={"5em"}
                    h={"5em"}
                  />
                  <Text textAlign={"center"}>Git</Text>
                </Box>
              </HStack>
            </MotionStack>
          </TabPanel>
          <TabPanel>
            <VStack>
              <Center>
                <Heading>Projects</Heading>
              </Center>
              <HStack
                justifyContent={"center"}
                wrap={"wrap"}
                p={5}
                alignContent={"center"}
              >
                <a href={"htts://art.lokalcr.com"} target={"_blank"}>
                  <Box
                    borderColor={"black"}
                    maxW={"md"}
                    borderWidth={1}
                    borderRadius={"md"}
                    p={5}
                  >
                    <Img src={Lokal} />
                    <Heading size={"md"} textAlign={"center"}>
                      Commissions by Lokal Creatives
                    </Heading>
                    <Text textAlign={"center"}>
                      A web app for artists to sell subscriptions and art
                      commissions.
                    </Text>
                  </Box>
                </a>
                <a href={"https://mentionsapp.com"} target={"_blank"}>
                  <Box
                    borderColor={"black"}
                    maxW={"md"}
                    borderWidth={1}
                    borderRadius={"md"}
                    p={5}
                  >
                    <Img src={Mentions} />
                    <Heading textAlign={"center"} size={"md"}>
                      Mentions
                    </Heading>
                    <Text textAlign={"center"}>
                      Simple advanced search for Reddit.
                    </Text>
                  </Box>
                </a>
              </HStack>
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default IndexPage;
