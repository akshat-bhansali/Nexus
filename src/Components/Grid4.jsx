import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export default function Grid4() {
  return (
    <>
      <SimpleGrid columns={2} h={"100vh"}>
        <Box h={"50vh"} width={"100%"}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="k"
          />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          h={"50vh"}
          width={"100%"}
          bgColor={"foreground"}
          color={"background"}
          textAlign={"center"}
          alignItems={"center"}
          justifyContent={"center"}
          p={"10% 20% 10% 20%"}
        >
          <Heading size={"md"}>hello</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            nisi. Iste praesentium ipsam eligendi porro?
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          h={"50vh"}
          width={"100%"}
          bgColor={"foreground"}
          color={"background"}
          textAlign={"center"}
          alignItems={"center"}
          justifyContent={"center"}
          p={"10% 20% 10% 20%"}
        >
          <Heading size={"md"}>hello</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            nisi. Iste praesentium ipsam eligendi porro?
          </Text>
        </Box>

        <Box h={"50vh"} width={"100%"}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
            alt="p"
          />
        </Box>
      </SimpleGrid>
    </>
  );
}
