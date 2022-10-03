import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import style from "./Navbar.module.css";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <>
      <IconButton
        onClick={() => onOpen()}
        aria-label="Open Menu"
        boxSize="2em"
        fontSize={20}
        size="lg"
        mr={2}
        bgColor="white"
        icon={<HamburgerIcon />}
        display={["flex", "flex", " none", "none"]}
      />

      <Drawer onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex
              // px="14"
              mr="30px"
              // flex={{ base: 1 }}

              align="center"
              textAlign="center"
              gap="0.5rem"
            >
              <Image
                className={style.image}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.trustradius.com%2Fproduct-logos%2Fdy%2Fzk%2FG5MXHRHW9UCZ-180x180.PNG&f=1&nofb=1"
              />
              <Link fontWeight="12rem" className={style.text} to="/">
                Everhour
              </Link>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <VStack align>
              <Accordion defaultIndex={[1]} allowMultiple="false">
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        <Text fontSize="lg">Integrations</Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <VStack align="">
                      <HStack>
                        <Image
                          w="20px"
                          mr={"10px"}
                          src="https://assets.materialup.com/uploads/e70f602b-912c-4c4c-b498-9038227eb063/0x0ss-85.jpg"
                        />
                        <Text>Asana</Text>
                      </HStack>
                      <HStack>
                        <Image
                          w="20px"
                          mr={"10px"}
                          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        />
                        <Text>Github</Text>
                      </HStack>
                      <HStack>
                        <Image
                          w="20px"
                          mr={"10px"}
                          src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
                        />
                        <Text>Notion</Text>
                      </HStack>
                      <HStack>
                        <Image
                          w="20px"
                          mr={"10px"}
                          src="https://lh3.googleusercontent.com/-GMnqdh83HhQ/Wgiqf3c30eI/AAAAAAAAAG4/arGBbW7vR5gHPSNTEcOb-zmBx_NhxUuDACLcBGAs/s400/original-favicon_diecut_256.png"
                        />
                        <Text>Monday</Text>
                      </HStack>
                      <HStack>
                        <Image
                          w="20px"
                          mr={"10px"}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMF_st11LgbGuKe7FalrxdE-KFtDbUZRVCiqnklmt&s"
                        />
                        <Text>Gitlab</Text>
                      </HStack>
                      <HStack>
                        <Image
                          w="20px"
                          mr={"10px"}
                          src="https://img.favpng.com/20/4/5/basecamp-classic-computer-software-project-management-png-favpng-BEy4RLYbqV54b8sV7XypuqaZ4_t.jpg"
                        />
                        <Text>Basecamp</Text>
                      </HStack>
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Link to="/pricing">
                <Text pl={4} fontSize="lg">
                  Pricing
                </Text>
              </Link>
              <Divider size="lg" fontWeight="lg" />

              <Link to="/demo">
                <Text pl={4} fontSize="lg">
                  Demo
                </Text>
              </Link>
              <Divider />
              <Flex justifyContent="center" >
                <Button onClick={()=>navigate('/login')} colorScheme="green" width={["100%","60%","50%"]} size="lg">
                  LogIn
                </Button>
              </Flex>
              <Flex justifyContent="center" >
                <Button variant='outline' onClick={()=>navigate('/login')} colorScheme="green" width={["100%","60%","50%"]} size="lg">
                  Get Started
                </Button>
              </Flex>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
