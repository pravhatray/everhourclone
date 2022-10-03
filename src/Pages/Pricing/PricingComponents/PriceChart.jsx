import {
  Box,
  Button,
  Flex,
  Tab,
  TabList,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsCurrencyDollar } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const PriceChart = () => {
  const [sub, setSub] = useState("monthly");
  const navigate = useNavigate();

  const freeArr = [
    "Unlimited time tracking",
    "Unlimited projects",
    "Website integrations",
    "Unlimited reports",
    "Add time for others",
    "Export reports",
    "Web, iOS app, browser extension",
  ];

  const liteArr = [
    "Up to 10 users",
    "Clients",
    "Billable rates, costs, profit",
    "Budgets",
    "Invoicing",
    "Lock time entries at certain rules",
    "Reminders",
    "Schedule reports via email",
    "Fast and responsive support",
    "API",
  ];

  const teamArr = [
    "Unlimited users",
    "Native integrations with sync",
    "Time approval",
    "Time tracking audits",
    "Time cards",
    "Time off",
    "Expenses",
    "Scheduling",
    "Optional screenshots",
    "Single sign-on (SSO)",
    "Retainers",
    "Folders in reports",
    "Priority support",
    "API",
  ];

  return (
    <>
      <Box width="100%">
        <Flex pt="40px" pb="20px" gap="20px" justifyContent="center">
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList>
              <Tab onClick={() => setSub("monthly")}>Monthly</Tab>
              <Tab onClick={() => setSub("yearly")}>Yearly</Tab>
            </TabList>
          </Tabs>
        </Flex>

        <Box
          display="flex"
          flexDirection={["column","column","row"]}
          boxShadow="base"
          //   p="6"
          rounded="md"
          bg="white"
          justifyContent="center"
          margin="auto"
            // border="1px solid red"
          maxW="90%"
        >
          <VStack
            py="20px"
            pl="50px"
            // border="1px solid red"
            height="160vh"
            flex="1"
            alignItems="flex-start"
          >
            <Box
              border="2px solid rgb(208,208,208)"
              width="80%"
              borderRadius="10px"
            ></Box>
            <Text
              lineHeight={["30px", "60px"]}
              fontWeight={["medium", "normal", "semibold"]}
              fontSize={["35px"]}
              //   border="1px solid red"
            >
              Free
            </Text>
            <Text
              fontWeight="light"
              fontSize="18px"
              color="gray.500"
              maxW="80%"
            >
              Simple time tracking and reporting for freelancers and small
              teams.
            </Text>
            <Flex >
              <Box pt="20px">
                <BsCurrencyDollar color="green" fontSize="20px" />
              </Box>
              <Text color="green" fontSize="64px">
                0
              </Text>
            </Flex>

            <Text pb="30px" color="gray.500" fontWeight="bold">
              Free for up to 5 users
            </Text>

            <Button onClick={()=>navigate("/signup")}  width="80%" size="lg" colorScheme="green">
              Get Started
            </Button>

            <Box pt="20px">
              {freeArr.map((item) => {
                return (
                  <Flex gap="12px" mb="10px" alignItems="center">
                    <TiTick color="green" />
                    <Text fontWeight="10px" fontSize="14px">
                      {item}
                    </Text>
                  </Flex>
                );
              })}
            </Box>
          </VStack>
          <VStack
            py="20px"
            pl="50px"
            // border="1px solid red"
            height="20px"
            flex="1"
            alignItems="flex-start"
          >
            <Box
              border="2px solid rgb(147,203,238)"
              width="80%"
              borderRadius="10px"
            ></Box>
            <Text
              lineHeight={["30px", "60px"]}
              fontWeight={["medium", "normal", "semibold"]}
              fontSize={["35px"]}
            >
              Lite
            </Text>

            <Text
              fontWeight="light"
              fontSize="18px"
              color="gray.500"
              maxW="80%"
            >
              More control, more features yet at a very affordable price.
            </Text>
            <Flex >
              <Box pt="20px">
                <BsCurrencyDollar color="green" fontSize="20px" />
              </Box>
              <Text color="green" fontSize="64px">
                {sub == "monthly" ? 6 : 5}
              </Text>
            </Flex>

            <Text pb="30px" color="gray.500" fontWeight="bold">
              / user / month, starting at 2 users
            </Text>

            <Button onClick={()=>navigate("/signup")} width="80%" size="lg" p="20px" colorScheme="green">
              Get Started
            </Button>

            <Box pt="20px">
              <Text pb="10px" pl="27px" fontSize="14px">
                Everything in Free plan +
              </Text>
              {liteArr.map((item) => {
                return (
                  <Flex gap="12px" mb="10px" alignItems="center">
                    <TiTick color="green" />
                    <Text fontWeight="10px" fontSize="14px">
                      {item}
                    </Text>
                  </Flex>
                );
              })}
            </Box>
          </VStack>
          <VStack
            py="20px"
            pl="50px"
            // border="1px solid red"
            height="20px"
            flex="1"
            alignItems="flex-start"
          >
            <Box
              border="2px solid rgb(142,221,178)"
              width="80%"
              borderRadius="10px"
            ></Box>
            <Text
              lineHeight={["30px", "60px"]}
              fontWeight={["medium", "normal", "semibold"]}
              fontSize={["35px"]}
            >
              Team
            </Text>

            <Text
              fontWeight="light"
              fontSize="18px"
              color="gray.500"
              maxW="80%"
            >
              For teams and companies that need all features, plus best-in-class
              integrations.
            </Text>
            <Flex >
              <Box pt="20px">
                <BsCurrencyDollar color="green" fontSize="20px" />
              </Box>
              <Text color="green" fontSize="64px">
                {sub == "monthly" ? 10 : 8}
              </Text>
              <Box display={sub == "monthly" ? "none" : "block"} pt="55px">
                <Text color="green">.50</Text>
              </Box>
            </Flex>

            <Text pb="30px" color="gray.500" fontWeight="bold">
              / user / month, starting at 5 users
            </Text>

            <Button onClick={()=>navigate("/signup")} width="80%" size="lg" p="20px" colorScheme="green">
              Get Started
            </Button>

            <Box pt="20px">
              <Text pb="10px" pl="27px" fontSize="14px">
                Everything in Free plan +
              </Text>
              {teamArr.map((item) => {
                return (
                  <Flex gap="12px" mb="10px" alignItems="center">
                    <TiTick color="green" />
                    <Text fontWeight="10px" fontSize="14px">
                      {item}
                    </Text>
                  </Flex>
                );
              })}
            </Box>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default PriceChart;
