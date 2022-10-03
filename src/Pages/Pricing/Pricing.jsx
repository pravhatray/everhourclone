import {
  Box,
  Button,
  Flex,
  Hide,
  HStack,
  List,
  ListItem,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "./PricingComponents/Header";
import PriceChart from "./PricingComponents/PriceChart";
import Questions from "./PricingComponents/Questions";
import Footer from "../../Components/Footer/Footer";
import SmallFooter from "../../Components/Footer/SmallFooter";
import { useNavigate } from "react-router-dom";
import { BsFillCircleFill } from "react-icons/bs";

const Pricing = () => {
  const navigate = useNavigate();
  return (
    <>
      <VStack>
        <Navbar />
        <Header />
        <PriceChart />
        <Questions />

        <Box pb="100px" pt="100px" width="100%">
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
      </VStack>

      <Hide below="md">
        <Footer />
      </Hide>

      <Show below="md">
        <SmallFooter />
      </Show>
    </>
  );
};

export default Pricing;
