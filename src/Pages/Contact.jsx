import { Box, Flex, Heading, Text, Center, Input, Textarea, Button } from "@chakra-ui/react";
import Map from "../Components/Map";

export default function Contact() {
  return (
    <>
      <Heading m={["3rem 0 0 0", null, "3rem 0 0 0"]} size={["sm", null, "md"]} textAlign={"center"}>
        Contact & Reach Us
      </Heading>
      <Center p={"3rem 0 1rem 0"}>
        <Box width={"10rem"} height={"0.1rem"} bgColor={"foreground"} borderRadius={"1rem"}></Box>
      </Center>
      <Box padding={"5%"}>
        <Flex justifyContent={"space-evenly"} flexWrap={"wrap"}>
          {/* Contact Us Section */}
          <Box margin={["0 0 3rem 0", null, "0 0 0 5%"]} width={"40%"} minWidth={"300px"}>
            <Heading  mb={4}>Contact us</Heading>
            {/* <Text mb={4}>
              Have a question, comment, want to say hello or share anything you have in mind? Fill out the contact form
              and we will get back to you in 24 to 48 hours.
            </Text> */}
            <Text mb={3}>Name: Ebrahim Akolawala</Text>
            <Text mb={3}>Email: maktabamanufacturers@gmail.com</Text>
            <Text mb={3}>Contact: +91 8779877752</Text>
          </Box>
          {/* Book an Appointment Section */}
          <Box margin={["0 0 3rem 0", null, "0 0 0 5%"]} width={"40%"} minWidth={"300px"}>
            <Heading  mb={4}>Stay Connected With Us!</Heading>
            {/* <Text mb={4}>
              Book an in-store appointment or an online consultation to get started with your Custom Made or Made to
              Measure project.
            </Text> */}
            <Input placeholder="Name" mb={3} />
            <Input placeholder="Email Id" mb={3} />
            <Input placeholder="Phone No." mb={3} />
            <Textarea placeholder="Message" mb={3} height={"150px"} />
            <Button colorScheme="blue">Send</Button>
          </Box>
        </Flex>
      </Box>
      <Map height={"500px"} width={"100%"} />
    </>
  );
}