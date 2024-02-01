import { Box, Flex, Heading, Text, Center } from "@chakra-ui/react";
import Map from "../Components/Map";

export default function Contact() {
  return (
    <>
      <Heading
        m={["3rem 0 0 0", null, "3rem 0 0 0"]}
        size={["sm", null, "md"]}
        textAlign={"center"}
      >
        Contact & Appointment Booking
      </Heading>
      <Center p={"3rem 0 1rem 0"}>
        <Box
          width={"10rem"}
          height={"0.1rem"}
          bgColor={"foreground"}
          borderRadius={"1rem"}
        ></Box>
      </Center>
      <Box className="animatefade" padding={"5%"}>
        <Flex justifyContent={"space-evenly"} flexWrap={"wrap"}>
          <Box
            margin={["0 0 3rem 0", null, "0 0 0 5%"]}
            width={"40%"}
            minWidth={"300px"}
          >
            <Heading>Contact us</Heading>
            <Text>
              Have a question, comment, want to say hello or share anything you
              have in mind? Fill out the contact form and we will get back to
              you in 24 to 48 hours. You can also email us directly at
              customer-service@40Colori.com or give us a call at +44 (0)20 7879
              9505.
            </Text>
          </Box>
          <Box
            margin={["0 0 3rem 0", null, "0 0 0 5%"]}
            width={"40%"}
            minWidth={"300px"}
          >
            <Heading>Book an Appointment</Heading>
            <Text>
              Book an in-store appointment or an online consultation (available
              via email or Zoom) to get started with your Custom Made or Made to
              Measure project. Please make sure to mention in your message the
              service you are interested in (Custom or MTM), the garments or
              accessories you want to customize, and your preferred date and
              time for the booking.
            </Text>
          </Box>
        </Flex>
      </Box>

      <Map height={"500px"} width={"100%"} />
    </>
  );
}
