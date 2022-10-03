import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Center,
  Image,
  Show,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

import { login } from "../Store/auth.action.type";

export default function Login() {
  let token = useSelector(store => store.auth.token);
  let auth = useSelector(store => store.auth);
  // const { SigninwithGoogle } = useAuth();

  const toast = useToast();
  const [logincred, setlogincred] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const onchange = (e) => {
    const { name, value } = e.target;
    setlogincred({
      ...logincred,
      [name]: value,
    });
  };
  const onsubmit =(e) => {
    e.preventDefault();
    // console.log(logincred);
    dispatch(login(logincred));
    

      
    }
   
       
    
  



  useEffect(() => {
    if (token) {
      toast({
        title: "Successfully Logged In",
        status: "success",
        position: "top",
        duration: 1500,
        isClosable: true,
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    }
  }, [token]);

  useEffect(() => {
    if (auth.error) {
      toast({
        title: "Invalid User/Password",
        status: "error",
        position: "top",
        duration: 1000,
        isClosable: true,
      });
    }
  }, [auth]);

  // let t = localStorage.getItem("token") || "";
  // if (t) {
  //   toast({
  //     title: "User already logged in",
  //     status: "success",
  //     position: "top",
  //     duration: 500,
  //     isClosable: true,
  //   });
  //    console.log("inside t");

  //   navigate("/dashboard");
  //   return <Navigate to='/dashboard'/>
  // }


  return (
    <Box>
      <Navbar />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("white", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} color={"#57534e "}>
              {" "}
              Login in to Everhour
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              {/* <Button
                w={"290px"}
                maxW={"lg"}
                variant={"outline"}
                borderColor={"#a8a29e "}
                leftIcon={<FcGoogle />}
                onClick={() =>
                  SigninwithGoogle()
                    .then((user) => {
                      console.log(user);
                    })
                    .catch((e) => console.log(e))}
              >
                <Center>
                  <Text>Sign in with Google</Text>
                </Center>
              </Button>
              <Center>
                <Text color={"#a8a29e "}>or</Text>
              </Center> */}

              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter your Email"
                  name="email"
                  onChange={onchange}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" onChange={onchange} />
              </FormControl>
              <Stack spacing={10}>
                <FormControl>
                  <Center>
                    <Button
                      size={"lg"}
                      m={"auto"}
                      bg={"#4ade80 "}
                      color={"white"}
                      _hover={{
                        bg: "#22c55e ",
                      }}
                      onClick={onsubmit}
                    >
                      Login
                    </Button>
                  </Center>
                </FormControl>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>

      <Show above="md">
        <Image
          ml="66%"
          src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/footer.jpg"
        />
      </Show>
    </Box>
  );
}