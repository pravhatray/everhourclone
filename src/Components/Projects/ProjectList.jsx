import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Hide,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { ChevronDownIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";

const getUsers = async () => {
  let res = await axios.get(
    `https://cloneofeverhour.herokuapp.com/users?r=employee`,
  );
  return res;
};

const ProjectList = ({ prodata, removePro, handleToggle }) => {
  const [empuser, setEmpUser] = useState([]);
  const [team, setTeam] = useState([]);

  const userdata = () => {
    getUsers().then(res => {
      console.log("users2list", res.data);
      setEmpUser(res.data);
    });
  };
  const handleClick = () => {
    userdata();
  };
  const handleTeam = async (emp_id,project_id) => {
 

    const res = await axios.patch(
      `https://cloneofeverhour.herokuapp.com/projects/${project_id}`,
      { teamMembers: emp_id },
    );
    console.log(res);
  };
  return (
    <>
      <Box>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Project Name</Th>
                <Th>Team Members</Th>
                <Hide below="md">
                  <Th>Budget</Th>
                </Hide>
                <Th>Status</Th>
                <Th>Remove</Th>
                <Th>Toggle</Th>
              </Tr>
            </Thead>
            <Tbody>
              {prodata.map(e => {
                return (
                  <Tr  key={e._id}>
                    <Td>{e.title}</Td>
                    <Td>
                      <Menu closeOnSelect={true}>
                        <MenuButton
                          onClick={handleClick}
                          as={Button}
                          rightIcon={<ChevronDownIcon />}
                        >
                          Add
                        </MenuButton>
                        <MenuList>
                          <MenuDivider />
                          {empuser.map(emp => {
                            return (
                              <MenuOptionGroup type="checkbox">
                                <MenuItemOption
                                  onClick={() => {handleTeam(emp._id,e._id);}}
                                  value="phone"
                                >
                                  {emp.username}
                                </MenuItemOption>
                              </MenuOptionGroup>
                            );
                          })}
                        </MenuList>
                      </Menu>
                    </Td>
                    <Hide below="md">
                      <Td>{e.isBudget ? "Not Funded" : "Funded"}</Td>
                    </Hide>
                    <Td>
                      {e.isActive ? (
                        <Button
                          variant={"solid"}
                          size="md"
                          colorScheme={"green"}
                          ml="-15px"
                          onClick={() => handleToggle(e._id, !e.isActive)}
                        >
                          Active
                        </Button>
                      ) : (
                        <Button
                          variant={"solid"}
                          size="md"
                          colorScheme={"red"}
                          ml="-15px"
                          onClick={() => handleToggle(e._id, !e.isActive)}
                          // mt="0px"
                        >
                          Not Active
                        </Button>
                      )}
                    </Td>
                    <Td>
                      <IconButton
                        onClick={() => removePro(e._id)}
                        size="sm"
                        colorScheme="gray"
                        color="black"
                        _focus={{ outline: "none" }}
                        icon={<DeleteIcon />}
                      />
                    </Td>
                    <Td>
                      <IconButton
                        onClick={() => handleToggle(e._id, !e.isActive)}
                        size="sm"
                        colorScheme="gray"
                        color="black"
                        _focus={{ outline: "none" }}
                        icon={<EditIcon />}
                      />
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default ProjectList;
