import { Box, Flex, Image, Link, Text, VStack } from "@chakra-ui/react";
import { RiCopyrightLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { BsYoutube } from "react-icons/bs";

import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        bgColor="rgb(21,22,22)"
        px="40px"
        py="30px"
        width="100vw"
        // height="100vh"
      >
        <Flex width="100%" height="90%">
          <Box flex="0.6">
            <Image
              width="32px"
              height="32px"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.trustradius.com%2Fproduct-logos%2Fdy%2Fzk%2FG5MXHRHW9UCZ-180x180.PNG&f=1&nofb=1"
            />
          </Box>
          <Box flex="1">
            <Flex flexDirection="column" gap="10px">
              <Text fontSize="md" color="rgb(154,155,155)">
                Company
              </Text>
              <Link fontSize="md" color="white">
                About us
              </Link>
              <Link fontSize="md" color="white">
                Contact
              </Link>
            </Flex>
          </Box>
          <Box flex="1.5">
            <Flex flexDirection="column" gap="10px">
              <Text fontSize="md" color="rgb(154,155,155)">
                Product
              </Text>
              <Link fontSize="md" color="white">
                Tour
              </Link>
              <Link fontSize="md" color="white">
                Pricing
              </Link>
              <Link fontSize="md" color="white">
                Request a demo
              </Link>
              <Link fontSize="md" color="white">
                Customers
              </Link>
              <Link fontSize="md" color="white">
                API & docs
              </Link>
              <Link fontSize="md" color="white">
                Status
              </Link>
            </Flex>
          </Box>
          <Box flex="2">
            <Flex flexDirection="column" gap="10px">
              <Text fontSize="md" color="rgb(154,155,155)">
                Solutions
              </Text>
              <Link fontSize="md" color="white">
                Project Budgeting
              </Link>
              <Link fontSize="md" color="white">
                Time Tracking
              </Link>
              <Link fontSize="md" color="white">
                Visual Planning
              </Link>
              <Link fontSize="md" color="white">
                Expenses
              </Link>
              <Link fontSize="md" color="white">
                Reporting
              </Link>
              <Link fontSize="md" color="white">
                Invoicing
              </Link>
              <Link fontSize="md" color="white">
                Time card calculator
              </Link>
              <Link fontSize="md" color="white">
                Weekly timesheet template
              </Link>
              <Link fontSize="md" color="white">
                Invoice generator
              </Link>
            </Flex>
          </Box>
          <Box flex="1.3">
            <Flex flexDirection="column" gap="10px">
              <Text fontSize="md" color="rgb(154,155,155)">
                Integrations
              </Text>
              <Link fontSize="md" color="white">
                Asana
              </Link>
              <Link fontSize="md" color="white">
                Basecamp
              </Link>
              <Link fontSize="md" color="white">
                Trello
              </Link>
              <Link fontSize="md" color="white">
                Jira
              </Link>
              <Link fontSize="md" color="white">
                Github
              </Link>
              <Link fontSize="md" color="white">
                Clickup
              </Link>
              <Link fontSize="md" color="white">
                Monday
              </Link>
              <Link fontSize="md" color="white">
                Notion
              </Link>
              <Link fontSize="md" color="white">
                Todoist
              </Link>
              <Link fontSize="md" color="white">
                Gitlab
              </Link>
              <Link fontSize="md" color="white">
                All
              </Link>
            </Flex>
          </Box>
          <Box flex="1.4">
            <Flex flexDirection="column" gap="10px">
              <Text fontSize="md" color="rgb(154,155,155)">
                Learn
              </Text>
              <Link fontSize="md" color="white">
                Resources
              </Link>
              <Link fontSize="md" color="white">
                Help Center
              </Link>
              <Link fontSize="md" color="white">
                Blog
              </Link>
              <Link fontSize="md" color="white">
                Product Updates
              </Link>
              <Link fontSize="md" color="white">
                Timesheet app
              </Link>
              <Link fontSize="md" color="white">
                Time clock app
              </Link>
              <Link fontSize="md" color="white">
                Attendance tracker
              </Link>
              <Link fontSize="md" color="white">
                Work hours tracker
              </Link>
              <Link fontSize="md" color="white">
                Employee time tracking
              </Link>
            </Flex>
          </Box>
          <Box flex="2.5">
            <Flex flexDirection="column" gap="10px">
              <Text fontSize="md" color="rgb(154,155,155)">
                Download
              </Text>
              <Link fontSize="md" color="white">
                Browser extension
              </Link>
              <Link fontSize="md" color="white">
                Chrome time tracking extension
              </Link>
              <Link fontSize="md" color="white">
                Visual Planning
              </Link>
              <Link fontSize="md" color="white">
                Time tracking with screenshots
              </Link>
              <Link fontSize="md" color="white">
                iPhone app
              </Link>
            </Flex>
          </Box>
        </Flex>

        <Flex pt="50px" justifyContent="space-between">
          <Flex gap="13px" color="white" alignItems="center">
            <Flex alignItems="center">
              <RiCopyrightLine color="white" />
              2022 Everhour
            </Flex>
            <Flex pt="3px" gap="7px">
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
          </Flex>
          <Flex alignItems="center" gap="5px" >
            <Link href="https://www.facebook.com/everhour/" isExternal>
              <FaFacebook as="link" fontSize="22px" color="white" />
            </Link>
            <Link href="https://twitter.com/everhour" isExternal >
              <AiFillTwitterCircle as="link" fontSize="24px" color="white" />
            </Link>
            <Link href="https://www.linkedin.com/company/everhour/" isExternal >
              <TiSocialLinkedinCircular as="link" fontSize="28px" color="white" />
            </Link>
            <Link href="https://www.youtube.com/channel/UC1JUNFlxVwkAdaIb7ztZbbA" isExternal >
              <BsYoutube as="link" fontSize="26px" color="white" />
            </Link>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
