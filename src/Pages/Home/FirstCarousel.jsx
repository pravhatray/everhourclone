import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./FirstCarousel.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { GiBackwardTime } from "react-icons/gi";
import { BiDollarCircle } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { FcPlanner } from "react-icons/fc";
import { TbBusinessplan } from "react-icons/tb";
import { FaFileInvoiceDollar } from "react-icons/fa";


export default function FirstCarousel() {
  const [active, setActive] = useState(1);
  return (
    <>
      <VStack px="20px" justifyItems="center" display={active === 1 ? "block" : "none"}>
        <Box
          ml={["0px", "0px", "250px"]}
          alignItems="center"
          display={["block", "flex", "flex"]}
          gap={3}
        >
          <GiBackwardTime fontSize="25px" />
          <Text fontSize={["17px", "22px"]}>Time tracking</Text>
        </Box>
        <Text pb={["5px", "15px"]}>
          Easy-to-use time tracker. Know the time spent on tasks, hours of work,
          and breaks for each employee
        </Text>
      </VStack>
      <VStack px="20px" justifyItems="center" display={active === 2 ? "block" : "none"}>
        <Box
          ml={["0px", "0px", "250px"]}
          alignItems="center"
          display={["block", "flex", "flex"]}
          gap={3}
        >
          <BiDollarCircle fontSize="25px" />
          <Text fontSize={["17px", "22px"]}>Billing and budgeting</Text>
        </Box>
        <Text pb={["5px", "15px"]}>
          Simple and flexible projects billing. Set budgets to track progress in
          real time. Receive timely notifications
        </Text>
      </VStack>
      <VStack px="20px" justifyItems="center" display={active === 3 ? "block" : "none"}>
        <Box
          ml={["0px", "0px", "250px"]}
          alignItems="center"
          display={["block", "flex", "flex"]}
          gap={3}
        >
          <FaTasks fontSize="25px" />
          <Text fontSize={["17px", "22px"]}>Task management</Text>
        </Box>
        <Text pb={["5px", "15px"]}>
          Create tasks, organize them in sections, add time estimates to keep
          everyone in the loop and on track
        </Text>
      </VStack>
      <VStack px="20px" justifyItems="center" display={active === 4 ? "block" : "none"}>
        <Box
          ml={["0px", "0px", "250px"]}
          alignItems="center"
          display={["block", "flex", "flex"]}
          gap={3}
        >
          <FcPlanner fontSize="25px" />
          <Text fontSize={["17px", "22px"]}>Visual planning</Text>
        </Box>
        <Text pb={["5px", "15px"]}>
          View your team’s schedule, know how busy or available someone is,
          compare plan to the actual time spent
        </Text>
      </VStack>
      <VStack px="20px" justifyItems="center" display={active === 5 ? "block" : "none"}>
        <Box
          ml={["0px", "0px", "250px"]}
          alignItems="center"
          display={["block", "flex", "flex"]}
          gap={3}
        >
          <TbBusinessplan fontSize="25px" />
          <Text fontSize={["17px", "22px"]}>Expenses</Text>
        </Box>
        <Text pb={["5px", "15px"]}>
          Track work-related expenses. Reimburse employees, use costs in project
          budgets, add to client invoices
        </Text>
      </VStack>
      <VStack px="20px" justifyItems="center" display={active === 6 ? "block" : "none"}>
        <Box
          ml={["0px", "0px", "250px"]}
          alignItems="center"
          display={["block", "flex", "flex"]}
          gap={3}
        >
          <FaFileInvoiceDollar fontSize="25px" />
          <Text fontSize={["17px", "22px"]}>Invoicing</Text>
        </Box>
        <Text pb={["5px", "15px"]}>
          Easily create an invoice based on tracked time and expenses. Connect
          with QuickBooks, Xero or FreshBooks
        </Text>
      </VStack>
      
      <Swiper
        // width="55%"
        onSlideChange={(swiper) => {
            console.log(swiper.activeIndex);
          setActive(swiper.activeIndex);
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
          colorScheme: 'green',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src="https://blog-cdn.everhour.com/assets/images/new-design/screens/team-timesheet-v2.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://blog-cdn.everhour.com/assets/images/new-design/screens/projects-dashboard-v2.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://blog-cdn.everhour.com/assets/images/new-design/screens/projects-board-view-v2.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://blog-cdn.everhour.com/assets/images/new-design/screens/resource-planning-members-new-v2.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://blog-cdn.everhour.com/assets/images/new-design/screens/expenses.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/invoices-preview-v3.webp" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
