import { Hide, Show, VStack } from "@chakra-ui/react";
import React from "react";
import Footer from "../../Components/Footer/Footer";
import SmallFooter from "../../Components/Footer/SmallFooter";
import Navbar from "../../Components/Navbar/Navbar";
import DemoPageBox from "./DemoPageBox";
import DemoPageHeader from "./DemoPageHeader";

const DemoPage = () => {
  return (
    <>
      <VStack width="100vw">
        <Navbar />
        <DemoPageHeader />
        
        <DemoPageBox />
        <Hide below="md">
          <Footer />
        </Hide>

        <Show below="md">
          <SmallFooter />
        </Show>
      </VStack>
    </>
  );
};

export default DemoPage;
