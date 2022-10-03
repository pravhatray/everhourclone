


import { Box, Flex, Hide, Show, SimpleGrid } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Humber from "../Sidebar/Humber";
// import { Navbar } from "./Navbar";
// import { Footer } from "./Footer";
import Sidebar from "../Sidebar/Sidebar";
export const Shared = () => {
  return (
    <>
      <Box>
        <Show below='lg'>
          <Humber />
        </Show>
      </Box>


      <Flex  gap={"40px"}>
        <Box width="14.5%" p={5} position="fixed">
          <Hide below='lg'>
            <Sidebar />
          </Hide>
        </Box>
        <Hide below='lg'>
          <Box ml="17%" width={'100%'} >
            <Outlet />
          </Box>
        </Hide>
      </Flex >

      <Show below='lg'>
        <Box width={'100%'}>
        <Outlet />
        </Box>
</Show>

    </>
  );
}