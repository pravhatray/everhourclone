import {
  Box,
  Button,
  Flex,
  Heading,
  Hide,
  HStack,
  Image,
  Input,
  List,
  ListIcon,
  ListItem,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { ImQuotesRight } from "react-icons/im";
import { BsFillCircleFill } from "react-icons/bs";

import "./Home.css";
import { Link, Navigate } from "react-router-dom";
import g_image from "../../Assets/google-image.png";
import FirstCarousel from "./FirstCarousel";
import SecondCarousel from "./SecondCarousel";
// import { useAuth } from "../../context/AuthContext";

import Footer from "../../Components/Footer/Footer";
import SmallFooter from "../../Components/Footer/SmallFooter";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  // const { SigninwithGoogle } = useAuth();
  return (
    <VStack>
      <Navbar />
      <VStack py="90px" gap="10px" px="20px" maxW="900px">
        <Flex gap="2" align="center">
          <BsStarFill className="star_icon" />
          <BsStarFill className="star_icon" />
          <BsStarFill className="star_icon" />
          <BsStarFill className="star_icon" />
          <BsStarHalf className="star_icon" />
          <Text color="gray.500">4.5 (500+ reviews)</Text>
        </Flex>
        <Flex justifyItems="center" textAlign="center">
          <Text
            lineHeight={["30px", "60px"]}
            fontWeight={["medium", "normal", "semibold"]}
            fontSize={["25px", "35px", "50px"]}
          >
            Powerful time tracking software with hassle-free integrations
          </Text>
        </Flex>

        <Flex maxW="700px" textAlign="center">
          <Text fontSize={["17px", "20px"]} color="rgb(125,127,131)">
            Accurate time tracker for budgeting, client invoicing and painless
            payroll. Works with the apps your team already use
          </Text>
        </Flex>
        <Box textAlign="center" gap={10} display={["block", "flex"]}>
          <Button
            onClick={() => navigate("/signup")}
            px="130px"
            mt={["10px", "0px", "0px"]}
            width={["100%", "40%"]}
            size="lg"
            colorScheme={"green"}
          >
            Try Free
          </Button>
        </Box>
        <Box>
          <Link>
            {/* <HStack>
              <Image
                display="inline-block"
                boxSize="30px"
                objectFit="cover"
                src={g_image}
              />
              <Text
               
              >
                Or sign up with Google Account
              </Text>
            </HStack> */}
          </Link>
        </Box>
      </VStack>
      <FirstCarousel />
      <SecondCarousel />
      <Hide below="md">
        <Box maxW="100vw" pl={["0px", "0px", "80px"]}>
          <HStack gap="40px">
            <VStack maxWidth="50%" gap="20px" alignItems="flex-start">
              <Text
                maxW={["100%", "100%", "60%"]}
                lineHeight={["auto", "35px"]}
                fontWeight={["medium", "normal", "bold"]}
                fontSize={["10px", "30px"]}
              >
                Everhour has helped 240,000+ people complete over 135 million
                tasks in 3 million projects
              </Text>
              <Flex maxW="100%" gap="60px">
                <ImQuotesRight
                  ml="50px"
                  color="rgb(215,243,227)"
                  fontSize="100px"
                />
                <Text maxW="75%">
                  Everhour helps us track our engineering hours which is a
                  requirement for several Government grants we have received.
                  Without Everhour, we would be unable to accurately track the
                  hours associated with each individual project we are working
                  on as a company. The reports are easily customizable which
                  allows me to extract the data I need. Everhour is a great tool
                  for our time tracking needs!
                  <br />
                  <br />
                  <Text fontWeight="bold" >Kelly Bonneau, CPA</Text>
                  
                  <Text>Accounting Manager at 7shifts</Text>
                </Text>
              </Flex>
            </VStack>
            <Image
              width={["20%", "40%", "50%"]}
              src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/customers/customer-kelly.webp"
            />
          </HStack>
        </Box>
      </Hide>

      <Show below="md">
        <Box>
          <VStack>
            <Text
              maxW="90%"
              // lineHeight={["auto", "35px"]}
              fontWeight="normal"
              fontSize={["20px", "40px"]}
            >
              Everhour has helped 240,000+ people complete over 135 million
              tasks in 3 million projects
            </Text>
            <Image
              width={["20%"]}
              src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/customers/customer-kelly.webp"
            />
            <Text maxW="90%">
              Everhour helps us track our engineering hours which is a
              requirement for several Government grants we have received.
              Without Everhour, we would be unable to accurately track the hours
              associated with each individual project we are working on as a
              company. The reports are easily customizable which allows me to
              extract the data I need. Everhour is a great tool for our time
              tracking needs!
              <br />
              Kelly Bonneau, CPA
              <br />
              Accounting Manager at 7shifts
            </Text>
          </VStack>
        </Box>
      </Show>

      <Box pb="30px" pt="60px" width="100%">
        <HStack gap="150px" px="10%">
          <VStack alignItems="flex-start" maxW={["90%", "90%", "60%"]}>
            <Text
              // maxW="60%"
              // lineHeight={["35px"]}
              fontWeight={["medium", "normal", "bold"]}
              fontSize={["30px"]}
            >
              Take control of your time with Everhour
            </Text>
            <Text color="gray.500">
              Beautiful integrations. Intuitive interface. No unexpected fees
            </Text>
            <Box
              pt="20px"
              textAlign="center"
              gap={5}
              display={["block", "flex"]}
            >
              <Button
                onClick={() => navigate("/signup")}
                px="130px"
                mt={["10px", "0px", "0px"]}
                width={["100%", "40%"]}
                size="md"
                colorScheme={"green"}
              >
                Try Free
              </Button>
            </Box>
          </VStack>

          <Hide below="md">
            <Box>
              <List alignItems="center" spacing={3}>
                <ListItem textAlign="center">
                  <Flex gap="10px" alignItems="center">
                    <BsFillCircleFill color="green" fontSize="10px" />
                    <Text>Track time from the apps you already us</Text>
                  </Flex>

                  {/* <ListIcon as={BsFillCircleFill} mt="-10px"  color="green.500" fontSize="10px" />
                Track time from the apps you already use */}
                </ListItem>
                <ListItem>
                  <Flex gap="10px" alignItems="center">
                    <BsFillCircleFill color="green" fontSize="10px" />
                    <Text>Know where your team’s time is going</Text>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex gap="10px" alignItems="center">
                    <BsFillCircleFill color="green" fontSize="10px" />
                    <Text>Keep projects on budget</Text>
                  </Flex>
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                  <Flex gap="10px" alignItems="center">
                    <BsFillCircleFill color="green" fontSize="10px" />
                    <Text>Increase transparency</Text>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex gap="10px" alignItems="center">
                    <BsFillCircleFill color="green" fontSize="10px" />
                    <Text>Make your workflow more efficient</Text>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex gap="10px" alignItems="center">
                    <BsFillCircleFill color="green" fontSize="10px" />
                    <Text>Spot burnout before it happens</Text>
                  </Flex>
                </ListItem>
              </List>
            </Box>
          </Hide>
        </HStack>
      </Box>

      <Hide below="md">
        <Footer />
      </Hide>

      <Show below="md">
        <SmallFooter />
      </Show>
    </VStack>
  );
};

export default Home;
