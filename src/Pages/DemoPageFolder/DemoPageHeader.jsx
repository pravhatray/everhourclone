import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import rocketImg from "../../Assets/rocket.png";
import CalendlyWidget from "./CalendlyWidget";


const DemoPageHeader = () => {
  return (
    <VStack pb="8%" pt="65px" width="100%" textAlign="center">
      <Flex pb="15px" justifyContent="center">
        <Text fontWeight={["bold"]} fontSize={["25px", "30px", "45px"]}>
          Book a 30-min live demo
        </Text>
        <Image height={["32px", "52px", "62px"]} src={rocketImg} />
      </Flex>

      <Text
        color="rgb(150,153,147)"
        lineHeight="30px"
        maxW={["90%", "90%", "60%"]}
        fontSize="20px"
        fontWeight="bold"
      >
        10+ users? Let one of our customer success experts show you how Everhour
        works, with plenty of time set aside for questions
      </Text>

      <Flex flexDir={["column", "column", "row"]} pt="20px" gap="20px">
      <CalendlyWidget/>

        {/* <Button
        // onClick={Calendly.initPopupWidget({url:'https://calendly.com/vivekrana13420/30min'})}
          py="25px"
          width={["240px", "220px", "200px"]}
          colorScheme="green"
          size="md"
        >
          Schedule Time
        </Button> */}
        <Button
          py="24px"
          px="40px"
          colorScheme="green"
          size="md"
          variant="outline"
        >
          Watch videos
        </Button>
      </Flex>
    </VStack>
  );
};

export default DemoPageHeader;
