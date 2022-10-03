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
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ProjectList from "./ProjectList";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../Store/store";

const getproject = async (id) => {
  let res = await axios.get(
    `https://cloneofeverhour.herokuapp.com/projects/${id}`
  );
  return res;
};

const toggle = async (id, isActive) => {
  let res = await axios.patch(
    `https://cloneofeverhour.herokuapp.com/projects/${id}`,
    {
      isActive,
    }
  );
  return res;
};

const Projects = () => {
  let id = useSelector((store) => store.auth.id);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [prodata, setProData] = useState([]);
  const [title, setTitle] = useState();
  const [searchParam, setSearchParam] = useSearchParams();
  const [query, setQuery] = useState(searchParam.get("q") || "");
  const [loading, setLoading] = useState(false);
  // const [searchedData,setSearchedData]=useState([])

  // const search=(query)=>{
  //   axios.get(`https://cloneofeverhour.herokuapp.com/projects/63356e456e29a1d70aab7c3b?q=${query}`)
  //     .then((res)=>{
  //       console.log(res)
  //       setSearchedData(res)
  //     })

  // }

  const handleQuery = (e) => {
    setTimeout(() => {
      setQuery(e.target.value);
    }, 1000);
  };

  // function handlesearch(){
  //   search(query)
  // }

  // useEffect(()=>{
  //   setSearchParam({q:query})
  // },[query])

  const projectdata = (id) => {
    setLoading(true);
    getproject(id).then((res) => {
      setProData(res.data);
      setLoading(false);
    
    });

  };

  const removePro = async (iddd) => {
    const res = await axios.delete(
      `https://cloneofeverhour.herokuapp.com/projects/${iddd}`
    );

    if (res.status === 200) {
      projectdata(id);
    }
  };

  const handleToggle = (iddd, isActive) => {
    toggle(iddd, isActive).then((res) => {
      projectdata(id);
      console.log("ress", res);
    });
  };

  const addPro = async (id, project) => {
    console.log(id);

    const res = await axios.post(
      `https://cloneofeverhour.herokuapp.com/projects/${id}`,
      project
    );

    if (res.status === 200) {
      projectdata(id);
    }
  };

  useEffect(() => {
    projectdata(id);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addPro(id, { title: title });
  };

  return (
    <>
      <Box>
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Text fontSize="x-large" fontWeight="medium" color="#57534e ">
              Projects
            </Text>
          </Box>
          <Box>
            <Box m={3}>
              <Button
                onClick={onOpen}
                bg={"#22c55e "}
                color="white"
                _hover={{ bg: "green" }}
              >
                <Text fontSize="sm" fontWeight="thin">
                  Create Project
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
                  <ModalHeader>Create Project</ModalHeader>
                  <ModalCloseButton />

                  <form onSubmit={handleSubmit}>
                    <ModalBody pb={6}>
                      <FormControl>
                        <FormLabel>Project name</FormLabel>
                        <Input
                          ref={initialRef}
                          placeholder="Project name"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
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
                            description: "Your Project is created.",
                            status: "success",
                            duration: 1000,
                            onClose,
                            isClosable: true,
                          })
                        }
                        colorScheme="green"
                        mr={3}
                      >
                        Create Project
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
              placeholder="Search Projects..."
            />
            <Button>Submit</Button>
          </Box>
        </Flex>

        <Box>
          { loading  && (<Stack mt='2rem'  pr='1rem'> <Skeleton height='40px' /><Skeleton height='40px' /><Skeleton height='40px' /></Stack>)}
         
          
           {!loading && prodata && (
            <ProjectList
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

export default Projects;
