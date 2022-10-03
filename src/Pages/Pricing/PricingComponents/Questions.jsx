import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Flex,
  Hide,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Questions = () => {
  return (
    <>
      <Box py="60px" width="100%" height="100vh"  px="50px">
        <Flex flexDirection={["column","column","row"]} >
          <Box flex="1" height="100%">
            <Text pb={["20px","20px","6px"]} fontSize="3xl" fontWeight="bold">
              Your questions. Answered!
            </Text>
            <Text pb={["20px","20px","6px"]}  maxW="70%">
              Here is a list of the most frequently asked questions. Got others
              or some ideas?
            </Text>
            <Hide below="md">
            <Image
              pt="40px"
              src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/faq.webp"
            />
            </Hide>
          </Box>
          <Box flex="1" height="100%">
            <Accordion colorScheme="brand.green" allowToggle>
              <AccordionItem py="15px">
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      What's the trial period purpose?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  When you sign up, you get a fully-functional account for 2
                  weeks, which gives you access to everything Everhour has to
                  offer. After 14 days, you will need to pick a plan and enter
                  your credit card details. We’ll email you a couple of days
                  before your trial expires to remind you.
                </AccordionPanel>
              </AccordionItem>
              {/* <Divider color="green" /> */}
              <AccordionItem py="15px">
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      What means 'Starting at x users'?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  This is kind of a basic usage fee. You can subscribe even if
                  you have fewer users, however, in this case, the minimum usage
                  fee will apply. Lite plan starts at $10 and includes 2 users.
                  Team plan starts at $42.5 and includes 5 users.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem py="15px">
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Can I change my plan later?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Yes, you can upgrade your plan at any time. You will be
                  credited for the remainder of your current plan and charged
                  for your new plan when you upgrade.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem py="15px">
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Can I add or remove members at any time?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Absolutely! Everhour is pay-as-you-go, and you can easily add
                  or remove members from your account with a couple of clicks.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem py="15px">
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      What if I want to cancel my service?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  No problem. If you decide Everhour isn’t for you (or you just
                  need to pause), simply cancel before your next billing period.
                  This date is listed on your billing page. Unfortunately, we
                  can’t refund you for partial use or the amount of time left in
                  your subscription. Also, after cancelling, you can no longer
                  subscribe to the legacy plans, only plans currently listed on
                  our Pricing page.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem py="15px">
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      What kind of payment methods do you accept?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  We currently accept any credit or debit card with a
                  MasterCard, Visa, Discover Network, American Express, Diners
                  Club International or JCB logo.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem py="15px">
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Which currency will I be charged in?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  We charge you in US dollars. However, the debit currency
                  depends on your card and your bank.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </ Flex >
      </Box>
    </>
  );
};

export default Questions;
