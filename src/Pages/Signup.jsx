import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Navbar from "../Components/Navbar/Navbar";

import Griddrop from "./Review";
// import { useAuth } from "../context/AuthContext.js";

const Signup = () => {
  
  
  return (
    <Box>
      <Navbar />

      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "l", sm: "2xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Make your team more Productive <br />
          <Text as={"span"}>with Everhour</Text>
        </Heading>
        <Text color={"gray.500"}>
          Join 3,500+ customers who use Everhour to track time and plan their
          future projects more effectively
        </Text>
        <Stack
          direction={"column"}
          spacing={3}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        >
          <Center p={8}>
            <Button
              w={"290px"}
              maxW={"lg"}
              variant={"outline"}
              borderColor={"#a8a29e "}
              leftIcon={<FcGoogle />}
             
            >
              <Center>
                <Text>Sign in with Google</Text>
              </Center>
            </Button>
          </Center>
          <Text color={"#a8a29e "} mt={"-60%"}>
            or
          </Text>

          <Link to="/onboarding">
            <Button
              colorScheme={"#4ade80 "}
              bg={"#4ade80 "}
              px={6}
              _hover={{
                bg: "#22c55e",
              }}
            >
              Get Started
            </Button>
          </Link>
          <Text color={"gray"}>
            Free to try • No credit card required • 1-minute signup
          </Text>
        </Stack>
      </Stack>

      <Griddrop />
      <Center>
        <Button
          colorScheme={"white"}
          size={"sm"}
          mt={"3%"}
          color="#4ade80  "
          border={"1px solid #4ade80  "}
          _hover={{ color: "white", bg: "#4ade80  " }}
        >
          Read more
        </Button>
      </Center>
    </Box>
  );
};

export default Signup;
