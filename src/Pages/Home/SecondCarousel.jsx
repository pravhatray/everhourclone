import { Flex, Hide, HStack, Image, Text, VStack } from "@chakra-ui/react";
import "./SecondCarousel.css";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

const SecondCarousel = () => {
  return (
    <VStack py="90px" gap="10px" px="20px" maxW="100vw">
      <Flex justifyItems="center" textAlign="center" maxW="700px">
        <Text
          lineHeight={["30px", "60px"]}
          fontWeight={["medium", "normal", "semibold"]}
          fontSize={["25px", "35px", "40px"]}
        >
          Track time and watch progress inside two dozen popular apps
        </Text>
      </Flex>
      <HStack gap={[2, 10, 15]}>
        <Flex>
          <Hide below="md">
            <Image
              w="30px"
              mr={"5px"}
              src="https://assets.materialup.com/uploads/e70f602b-912c-4c4c-b498-9038227eb063/0x0ss-85.jpg"
            />
          </Hide>
          <Text fontSize={["15px", "20px"]} fontWeight="bold">
            Asana
          </Text>
        </Flex>
        <Flex>
          <Hide below="md">
            <Image
              w="30px"
              mr={"5px"}
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            />
          </Hide>
          <Text fontSize={["15px", "20px"]} fontWeight="bold">
            Github
          </Text>
        </Flex>
        <Flex>
          <Hide below="md">
            <Image
              w="30px"
              mr={"5px"}
              src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
            />
          </Hide>
          <Text fontSize={["15px", "20px"]} fontWeight="bold">
            Notion
          </Text>
        </Flex>
        <Flex>
          <Hide below="md">
            <Image
              w="30px"
              mr={"5px"}
              src="https://lh3.googleusercontent.com/-GMnqdh83HhQ/Wgiqf3c30eI/AAAAAAAAAG4/arGBbW7vR5gHPSNTEcOb-zmBx_NhxUuDACLcBGAs/s400/original-favicon_diecut_256.png"
            />
          </Hide>
          <Text fontSize={["15px", "20px"]} fontWeight="bold">
            Monday
          </Text>
        </Flex>
        <Flex>
          <Hide below="md">
            <Image
              w="30px"
              mr={"5px"}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMF_st11LgbGuKe7FalrxdE-KFtDbUZRVCiqnklmt&s"
            />
          </Hide>
          <Text fontSize={["15px", "20px"]} fontWeight="bold">
            Gitlab
          </Text>
        </Flex>
        <Flex>
          <Hide below="md">
            <Image
              w="30px"
              mr={"5px"}
              src="https://img.favpng.com/20/4/5/basecamp-classic-computer-software-project-management-png-favpng-BEy4RLYbqV54b8sV7XypuqaZ4_t.jpg"
            />
          </Hide>
          <Text fontSize={["15px", "20px"]} fontWeight="bold">
            Basecamp
          </Text>
        </Flex>
      </HStack>
      <Swiper
        // width="55%"
        // onSlideChange={(swiper) => {
        //     console.log(swiper.activeIndex);
        //   setActive(swiper.activeIndex);
        // }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
          colorScheme: "green",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/asana-primary.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/trello-primary.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/basecamp-primary.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/github-primary.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/clickup-primary.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/invoices-preview-v3.webp" />
        </SwiperSlide>
      </Swiper>

      <Hide breakpoint="(max-width: 950px)">
        <HStack
          justifyItems="center"
          alignItems="center"
          gap={["10px", "20px", "40px"]}
          px="150px"
        >
          <Flex gap={["5px", "10px", "30px"]}>
            <Text fontSize="x-large" color="rgb(87,187,113)">
              1
            </Text>
            <VStack alignItems="flex-start">
              <Text fontWeight="bold">Quick Setup</Text>
              <Text color="rgb(150,153,147)">
                Connect Everhour with your tool and start tracking time right
                away. No manual project setup required.
              </Text>
            </VStack>
          </Flex>
          <Flex gap="30px">
            <Text fontSize="x-large" color="rgb(87,187,113)">
              2
            </Text>
            <VStack alignItems="flex-start">
              <Text fontWeight="bold">Native integration</Text>
              <Text color="rgb(150,153,147)">
                Time tracking controls natively appears inside your project
                management tool, making it easy to track time.
              </Text>
            </VStack>
          </Flex>
          <Flex gap="30px">
            <Text fontSize="x-large" color="rgb(87,187,113)">
              3
            </Text>
            <VStack alignItems="flex-start">
              <Text fontWeight="bold">Automatic updates</Text>
              <Text color="rgb(150,153,147)">
                Everhour syncs changes automatically. That means your reports
                will always show the freshest data.
              </Text>
            </VStack>
          </Flex>
        </HStack>
      </Hide>
    </VStack>
  );
};

export default SecondCarousel;
