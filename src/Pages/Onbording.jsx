import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Checkbox,
  useToast,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../Store/signupaction";
import { useNavigate } from "react-router-dom";

export default function Onbording() {
  const token = useSelector((store) => store.signup.token);
  let [email, password] = token.split(":");

  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const [creds, setcreds] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [submitting, setsubmitting] = useState(false);

  function onchange(e) {
    const { name, value } = e.target;
    setcreds({
      ...creds,
      [name]: value,
    });
  }
  const onsubmit = (e) => {
    e.preventDefault();

    dispatch(signup(creds));
    console.log(token);
    toast({
      title: "Successfully Logged In",
      status: "success",
      position: "top",
      duration: 1300,
      isClosable: true,
    });
    navigate("/login");
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Welcome to Everhour
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Add your info to make collaborating easy
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <Box>
              <FormControl id="firstName" isRequired>
                <FormLabel>Full Name</FormLabel>

                <Input
                  type="text"
                  placeholder=" Type Full Name"
                  name="username"
                  onChange={onchange}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="firstName" isRequired>
                <FormLabel>Role</FormLabel>

                <Input
                  type="text"
                  placeholder="e.g:client ,employee/ admin"
                  name="role"
                  onChange={onchange}
                />
              </FormControl>
            </Box>
            <Box></Box>

            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Confirm your Email address.."
                name="email"
                onChange={onchange}
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Phone number</FormLabel>
              <Input type="number" placeholder="Enter your Phone number" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={onchange}
                />
                <InputRightElement h={"full"}>
                  <Button
                    mt={"-10px"}
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Stack pt={6}>
                <Checkbox>
                  I have read and agree the{" "}
                  <Text as={"span"} color={"#38bdf8  "} fontSize={"sm"}>
                    Terms
                  </Text>{" "}
                  and{" "}
                  <Text as={"span"} color={"#38bdf8  "} fontSize={"sm"}>
                    Privacy Policy
                  </Text>
                </Checkbox>
              </Stack>
              <FormControl>
                <Center>
                  <Button
                    type="submit"
                    loadingText="Submitting"
                    size="lg"
                    bg={"#4ade80  "}
                    color={"white"}
                    _hover={{
                      bg: "#22c55e ",
                    }}
                    isLoading={submitting}
                    onClick={onsubmit}
                  >
                    Sign up
                  </Button>
                </Center>
              </FormControl>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
