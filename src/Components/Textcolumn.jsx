import { Box, Heading, Text } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
export default function Textcolumn({ thisHeading, thisText }) {
  return (
    <>
      <Box p={["10% 10%", null, "5% 30%"]} textAlign={"center"}>
        <Heading p={"0 0 3% 0"}>{thisHeading}</Heading>
        <Text>{thisText}</Text>
      </Box>
    </>
  );
}
