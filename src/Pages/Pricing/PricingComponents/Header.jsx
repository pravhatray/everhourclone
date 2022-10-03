import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <>
      <Box pt='60px' width="100%" >
        <VStack gap="10px" >
          <Text
            lineHeight={["30px", "60px"]}
            fontWeight={["medium", "normal", "semibold"]}
            fontSize={["25px", "35px", "50px"]}
          >
            Simple pricing
          </Text>
          <Text fontWeight="" fontSize="lg" maxW="90%" color="gray.500" >
            Start with no commitment. Try everything. Subscribe when you love
            it.
          </Text>
        </VStack>
      </Box>
    </>
  );
};

export default Header;
