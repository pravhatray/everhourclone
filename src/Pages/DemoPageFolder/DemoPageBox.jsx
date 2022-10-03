import {
  Box,
  Flex,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import styles from "./styles.module.css";

const DemoPageBox = () => {
  return (
    <VStack pb="20%" width="100%" height="90%">
      <Box
        className={styles.boxShadow}
        boxShadow="md"
        // p="6"
        rounded="md"
        bg="white"
        borderRadius="10px"
        // border="0.09px solid rgb(87,187,113)"
        box-shadow= "rgb(87,187,113) 0px 0px 0px 1px, rgb(87,187,113) 0px 0px 0px 1px inset"
        // box-shadow="rgb(87,187,113) 0px 0px 0px 1px"
        px={["20px", "20px", "60px"]}
        py="60px"
        
        width={["100%", "100%", "50%"]}
        height="100%"
      >
        <Box>
          <Text pb="18px" fontSize="20px" fontWeight="bold">
            What you’ll learn
          </Text>
          <List disply="flex" flexDir="column" alignContent="start" spacing={3}>
            <ListItem justifyContent="center">
              <ListIcon
                mt="8px"
                mr="20px"
                mb="5px"
                as={BsFillCircleFill}
                color="rgb(87,187,113)"
                fontSize="10px"
              />
              We’ll briefly explain what’s so special about Everhour.
            </ListItem>
            <ListItem justifyContent="center">
              <ListIcon
                mr="20px"
                mt="8px"
                as={BsFillCircleFill}
                color="rgb(87,187,113)"
                fontSize="10px"
              />
              We’ll teach you the basics of using the app, with plenty of time
              for questions.
            </ListItem>
            <ListItem justifyContent="center">
              <ListIcon
                mt="8px"
                mr="20px"
                mb="5px"
                as={BsFillCircleFill}
                color="rgb(87,187,113)"
                fontSize="10px"
              />
              We’ll answer all questions about setting up Everhour, using it
              with your team, or anything else you’d like to ask.
            </ListItem>

            <Text pt="30px" fontSize="20px" fontWeight="bold">
              Other information
            </Text>
            <ListItem justifyContent="center">
              <ListIcon
                mr="20px"
                mb="5px"
                as={BsFillCircleFill}
                color="rgb(87,187,113)"
                fontSize="10px"
              />
              Screenshare is done in the browser by means of Whereby software
              using this link. Please ensure that your mic and speakers work in
              advance!
            </ListItem>
            <ListItem justifyContent="center">
              <ListIcon
                mr="20px"
                mb="5px"
                as={BsFillCircleFill}
                color="rgb(87,187,113)"
                fontSize="10px"
              />
              Demos typically last 30 minutes, but we will adjust the time based
              on your needs.
            </ListItem>
            <ListItem justifyContent="center">
              <ListIcon
                mr="20px"
                mb="5px"
                as={BsFillCircleFill}
                color="rgb(87,187,113)"
                fontSize="10px"
              />
              Feel free to invite other team members to join this call.
            </ListItem>
          </List>
        </Box>
      </Box>
    </VStack>
  );
};

export default DemoPageBox;
