import {
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Image,
  Hide,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";

const DashboardHome = () => {
  const colors = useColorModeValue(
    ["red.50", "teal.50", "blue.50", "red.50", "teal.50", "blue.50"],
    ["red.900", "teal.900", "blue.900", "red.900", "teal.900", "blue.900"]
  );
  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];

  return (
    <>
      <Box>
        <Text
          textAlign={"center"}
          mt="1%"
          mb="2%"
          fontSize="x-large"
          fontWeight="normal"
        >
          Product Tour
        </Text>
        <SimpleGrid>
          <Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
            <TabList>
              <SimpleGrid columns={[3, 4, 6, 6]}>
                <Tab>Time Tracking</Tab>
                <Tab>Budgeting</Tab>
                <Tab>Task Management</Tab>
                <Tab>Visual Planning</Tab>
                <Tab>Expenses</Tab>
                <Tab>Invoicing</Tab>
              </SimpleGrid>
            </TabList>
            <TabPanels >
              <TabPanel>
                <Text textAlign='center' mb={5}>
                  Easy-to-use time tracker. Know the time spent on tasks, hours
                  of work, and breaks for each employee
                </Text>
                <Image borderRadius='10px' margin="auto" width="90%" src="https://blog-cdn.everhour.com/assets/images/new-design/screens/team-timesheet-v2.webp" />
              </TabPanel>
              <TabPanel>
                {" "}
                <Text   textAlign='center' mb={5}>
                  Simple and flexible projects billing. Set budgets to track
                  progress in real time. Receive timely notifications
                </Text>
                <Image   borderRadius='10px' margin="auto" width="90%" src="https://blog-cdn.everhour.com/assets/images/new-design/screens/projects-dashboard-v2.webp" />
              </TabPanel>
              <TabPanel>
                {" "}
                <Text   textAlign='center' mb={5} >
                  Easy-to-use time tracker. Know the time spent on tasks, hours
                  of work, and breaks for each employee
                </Text>
                <Image   borderRadius='10px' margin="auto" width="90%" src="https://blog-cdn.everhour.com/assets/images/new-design/screens/projects-board-view-v2.webp" />
              </TabPanel>
              <TabPanel>
                {" "}
                <Text  textAlign='center' mb={5}>
                View your team’s schedule, know how busy or available someone is, compare plan to the actual time spent
                </Text  >
                <Image  borderRadius='10px' margin="auto" width="90%" src="https://blog-cdn.everhour.com/assets/images/new-design/screens/resource-planning-members-new-v2.webp" />
              </TabPanel>
              <TabPanel>
                {" "}
                <Text   textAlign='center' mb={5}>
                Track work-related expenses. Reimburse employees, use costs in project budgets, add to client invoices
                </Text>
                <Image borderRadius='10px' margin="auto" width="90%" src="https://blog-cdn.everhour.com/assets/images/new-design/screens/expenses.webp" />
              </TabPanel>
              <TabPanel>
                {" "}
                <Text  textAlign='center' mb={5}>
                Easily create an invoice based on tracked time and expenses. Connect with QuickBooks, Xero or FreshBooks
                </Text>
                <Image borderRadius='10px' margin="auto" width="90%" src="https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/invoices-preview-v3.webp" />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default DashboardHome;
