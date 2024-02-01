import { Avatar, Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";

export default function Footer2() {
  return (
    <>
      {/* <Flex justifyContent={"space-around"}> */}
      <VStack p={"5%"} gap={"1rem"}>
        <Heading size={"sm"}>Follow</Heading>
        <Flex justifyContent={"space-evenly"}>
          <Avatar
            margin={"10%"}
            size="xs"
            name="Dan Abrahmov"
            src="https://cdn-icons-png.flaticon.com/512/1312/1312139.png"
          />
          <Avatar
            size="xs"
            margin={"10%"}
            name="Dan Abrahmov"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHrWtSBSRhL18Xo-LoWKvEWbIfuq43m6uquw&usqp=CAU"
          />
          <Avatar
            size="xs"
            margin={"10%"}
            name="Dan Abrahmov"
            src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
          />
        </Flex>
      </VStack>
      {/* <VStack p={"5%"} gap={"1rem"}>
        <Heading size={"sm"}>Contact</Heading>
        <Text>+91-9872348438</Text>
        <Text>+Yourgmail@gmail.com</Text>
        <Text size={"sm"}>06,Amsterdam,cize7</Text>
      </VStack> */}
      {/* </Flex> */}
      <Box p={"0 0 3rem 0"} textAlign={"center"}>
        <Text p={"0 0 1rem 0"}>Thissite.com</Text>
        <Text> ©2024 by Your company.</Text>
      </Box>
    </>
  );
}
