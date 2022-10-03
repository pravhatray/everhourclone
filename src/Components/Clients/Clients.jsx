import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Toast,
  useToast,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Center,
  Skeleton, SkeletonCircle, SkeletonText, Stack
} from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
// import ProjectList from '../Projects/ProjectList'
import { useSearchParams } from "react-router-dom";
import ClientList from "./ClientList";

const getproject = async () => {
  let res = await axios.get(
    `https://cloneofeverhour.herokuapp.com/clients`,
  );
  return res;
};

// const getUsers=async()=>{
//   let res=await axios.get(`https://cloneofeverhour.herokuapp.com/users?r=admin`)
//   return res
//   }

const toggle = async (id, isActive) => {
  let res = await axios.patch(
    `https://cloneofeverhour.herokuapp.com/clients/${id}`,
    {
      isActive,
    },
  );
  return res;
};

const Clients = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [prodata, setProData] = useState([]);
  const [title, setTitle] = useState();
  const [searchParam, setSearchParam] = useSearchParams();
  const [query, setQuery] = useState(searchParam.get("q") || "");
  const [searchedData, setSearchedData] = useState([]);
  const [loading , setLoading] = useState(true);

  const search = query => {
    axios
      .get(
        `https://cloneofeverhour.herokuapp.com/projects/63356e456e29a1d70aab7c3b?q=${query}`,
      )
      .then(res => {
        console.log(res);
        setSearchedData(res);
      });
  };

  const handleQuery = e => {
    setTimeout(() => {
      setQuery(e.target.value);
    }, 1000);
  };

  function handlesearch() {
    search(query);
  }

  useEffect(() => {
    setSearchParam({ q: query });
  }, [query]);

  const projectdata = () => {
    setLoading(true);
    getproject().then(res => {
      setProData(res.data);
    });
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };
  // console.log("prodata",prodata)

  const removePro = async id => {
    console.log(id);
    try{
      const res = await axios.delete(
        `https://cloneofeverhour.herokuapp.com/clients/${id}`,
      );
  
      if (res.status === 200) {
        projectdata();
      }      
    }
    catch(e){
      console.log(e.message);
    }
  };

  const handleToggle = (id, isActive) => {
    toggle(id, isActive).then(res => {
      projectdata();
      console.log("ress", res);
    });
  };

  const addPro = async project => {
    const res = await axios.post(
      `https://cloneofeverhour.herokuapp.com/clients`,
      project,
    );
    if (res.status === 200) {
      projectdata();
    }
  };

  //   const userdata=()=>{
  //     getUsers().then((res)=>{
  // // console.log("users2",res.data);
  //     })
  //   }

  //   useEffect(()=>{
  //     userdata()
  //   },[])

  useEffect(() => {
    projectdata();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    addPro({ name: title });
  };

  return (
    <>
      <Box>
        <Flex justifyContent="space-between" alignItems="center">
          <Box>

              <Text fontSize="x-large" fontWeight="medium" color="#57534e ">
                <Center>Clients</Center>
              </Text>
          
          </Box>
          <Box>
            <Box>
              <Button
                onClick={onOpen}
                bg={"#22c55e "}
                color="white"
                _hover={{ bg: "green" }}
                mt="1rem"
                mr="1rem"
              >
                <Text fontSize="sm" fontWeight="thin">
                  Create New Client
                </Text>
              </Button>

              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />

                <ModalContent>
                  <ModalHeader>Create New Client</ModalHeader>
                  <ModalCloseButton />

                  <form onSubmit={handleSubmit}>
                    <ModalBody pb={6}>
                      <FormControl>
                        <FormLabel>Client name</FormLabel>
                        <Input
                          ref={initialRef}
                          placeholder="Enter name..."
                          value={title}
                          onChange={e => setTitle(e.target.value)}
                          name="title"
                        />
                      </FormControl>
                    </ModalBody>

                    <ModalFooter>
                      <Button
                        type="submit"
                        onClick={() =>
                          toast({
                            title: "Account created.",
                            description: "Client created successfully.",
                            status: "success",
                            duration: 1000,
                            onClose,
                            isClosable: true,
                          })
                        }
                        colorScheme="green"
                        mr={3}
                      >
                        Create Client
                      </Button>
                      <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </form>
                </ModalContent>
              </Modal>
            </Box>
          </Box>
        </Flex>

        <Flex
          justifyContent="space-between"
          p={4}
          mt={6}
          alignItems="center"
          bg={"#f5f5f5  "}
        >
          <Box>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Filter
              </MenuButton>
              <MenuList>
                <MenuItem>IsActive</MenuItem>
                <MenuItem>HasBudget</MenuItem>
              </MenuList>
            </Menu>
          </Box>

          <Box display="flex">
            <Input
              type="text"
              onChange={handleQuery}
              variant="filled"
              placeholder="Search Clients..."
            />
            <Button onClick={handlesearch}>Submit</Button>
          </Box>
        </Flex>

        <Box>
        { loading  && (<Stack mt='2rem'  pr='1rem'> <Skeleton height='40px' /><Skeleton height='40px' /><Skeleton height='40px' /></Stack>)}
          {!loading && prodata && (
            <ClientList
              handleToggle={handleToggle}
              prodata={prodata}
              removePro={removePro}
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default Clients;
