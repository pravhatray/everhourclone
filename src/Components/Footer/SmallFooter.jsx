import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { RiCopyrightLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const SmallFooter = () => {
  return (
    <>
      <Box
        bgColor="rgb(21,22,22)"
        px="40px"
        py="30px"
        
        width="100vw"
        // height="100vh"
        color="white"
      >
        <Accordion allowToggle>
          <AccordionItem py="20px" pb="20px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Company
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pl="30px" pb="-20px">
              About us
            </AccordionPanel>
            <AccordionPanel pl="30px">Contact</AccordionPanel>
          </AccordionItem>

          <AccordionItem py="20px" pb="20px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Product
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pl="30px" pb="-20px">
              Tour
            </AccordionPanel>
            <AccordionPanel pl="30px" pb="-20px">
              Pricing
            </AccordionPanel>
            <AccordionPanel pl="30px" pb="-20px">
              Customers
            </AccordionPanel>
            <AccordionPanel pl="30px" pb="-20px">
              API & Docs
            </AccordionPanel>
            <AccordionPanel pl="30px">Status</AccordionPanel>
          </AccordionItem>

          <AccordionItem py="20px" pb="20px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Solutions
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pl="30px" pb="-20px">
              Time tracking
            </AccordionPanel>
            <AccordionPanel pl="30px" pb="-20px">
              Project budgeting
            </AccordionPanel>
            <AccordionPanel pl="30px" pb="-20px">
              Visual planning
            </AccordionPanel>
            <AccordionPanel pl="30px" pb="-20px">
              Expenses
            </AccordionPanel>
            <AccordionPanel pl="30px">Invoice generator</AccordionPanel>
          </AccordionItem>

          <AccordionItem py="20px" pb="20px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Integrations
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pl="30px" pb="-20px">
              Asana
            </AccordionPanel>
            <AccordionPanel pl="30px" pb="-20px">
              Basecamp
            </AccordionPanel>
            <AccordionPanel pl="30px" pb="-20px">
              Trello
            </AccordionPanel>
            <AccordionPanel pl="30px" pb="-20px">
              Jira
            </AccordionPanel>
            <AccordionPanel pl="30px" pb="-20px">
              ClickUp
            </AccordionPanel>
            <AccordionPanel pl="30px" pb="-20px">
              Monday
            </AccordionPanel>
            <AccordionPanel pl="30px" pb="-20px">
              Notion
            </AccordionPanel>
            <AccordionPanel pl="30px">GitLab</AccordionPanel>
          </AccordionItem>

          <AccordionItem py="20px" pb="20px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Learn
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pl="30px" pb="-20px">
              Resources
            </AccordionPanel>
            <AccordionPanel pl="30px" pb="-20px">
              Help center
            </AccordionPanel>
            <AccordionPanel pl="30px" pb="-20px">
              Blog
            </AccordionPanel>
            <AccordionPanel pl="30px" pb="-20px">
              Product updates
            </AccordionPanel>
            <AccordionPanel pl="30px" pb="-20px">
              Timesheet app
            </AccordionPanel>
            <AccordionPanel pl="30px" pb="-20px">
              Time clock app
            </AccordionPanel>
            <AccordionPanel pl="30px" pb="-20px">
              Attendance tracker
            </AccordionPanel>
            <AccordionPanel pl="30px">Employee time tracking</AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Box  >
          <Flex pt="40px" pb="3px" justifyContent="center" alignItems="center">
            <RiCopyrightLine color="white" />
            2022 Everhour
          </Flex>

          <Flex justifyContent="center"  pb="3px"  gap="7px">
            <Link>
              <Text fontSize="xs">Terms&nbsp;&nbsp;| </Text>
            </Link>
            <Link>
              <Text fontSize="xs"> Privacy&nbsp;&nbsp;| </Text>
            </Link>
            <Link>
              <Text fontSize="xs"> Cookies&nbsp;&nbsp;| </Text>
            </Link>
            <Link>
              <Text fontSize="xs"> Sitemap</Text>
            </Link>
          </Flex>

          <Flex justifyContent="center" alignItems="center" gap="5px">
            <Link>
              <FaFacebook as="link" fontSize="22px" color="white" />
            </Link>
            <Link>
              <AiFillTwitterCircle as="link" fontSize="24px" color="white" />
            </Link>
            <Link>
              <TiSocialLinkedinCircular
                as="link"
                fontSize="28px"
                color="white"
              />
            </Link>
            <Link>
              <BsYoutube as="link" fontSize="26px" color="white" />
            </Link>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default SmallFooter;
