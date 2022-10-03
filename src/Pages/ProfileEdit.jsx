import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  useToast,
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { update } from "../Store/auth.action.type";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function UserProfileEdit() {
  let token = useSelector((store) => store.auth.token);
  // let name = useSelector((store) => store.auth.name);

  // console.log(name)
  let dispatch = useDispatch();
  const [id, email, password] = token.split(":");
  const [profileName,setName]=useState(localStorage.getItem("name")||"")
  const [cred, setcred] = useState({});
  const toast = useToast();
  const navigate=useNavigate()

  function onchange(e) {
    const { name, value } = e.target;
    setcred({
      ...cred,
      [name]: value,
    });
  }

  
  

  function onsubmit(e) {
    e.preventDefault();
   dispatch(update(id,cred))
    // localStorage.setItem("name", cred.username)
    // setName( cred.username)
    //  update(cred)
    // console.log(cred,name)
    toast({
      title: "Saved successfully",
      position: "top",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  
  }


  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading
          lineHeight={1.1}
          color={"#57534e "}
          fontSize={{ base: "2xl", sm: "3xl" }}
        >
          MY Profile
        </Heading>
        <FormControl id="userName">
          <Stack direction={["column", "row"]} spacing={6}>
            <Center>
              <Avatar size="xl" src="">
                <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                  colorScheme="red"
                  aria-label="remove Image"
                  icon={<SmallCloseIcon />}
                />
              </Avatar>
            </Center>
            <Center w="full">
              <Button w="full">Upload Photo</Button>
            </Center>
          </Stack>
        </FormControl>
        <FormControl id="userName" isRequired>
          <FormLabel>User name</FormLabel>
          <Input
            placeholder="UserName"
            _placeholder={{ color: "gray.500" }}
            type="text"
            name="username"
            onChange={onchange}
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
            name="email"
            onChange={onchange}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="password"
            _placeholder={{ color: "gray.500" }}
            type="password"
            name="password"
            onChange={onchange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Role</FormLabel>
          <Input
            placeholder="Role"
            _placeholder={{ color: "gray.500" }}
            type="text"
            name="role"
            onChange={onchange}
          />
        </FormControl>
        <Stack spacing={6} direction={["column", "row"]}>
          <Button
            bg={"red.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "red.500",
            }}
          >
            Cancel
          </Button>
          <Button
            bg={"#4ade80 "}
            color={"white"}
            w="full"
            _hover={{
              bg: "#22c55e",
            }}
            type="submit"
            onClick={onsubmit}
          >
            Save changes
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
