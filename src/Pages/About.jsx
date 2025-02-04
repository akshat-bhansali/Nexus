import { Box, Center, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Flex
      textAlign={"center"}
      margin={["3rem 0 3rem 0", null, "3rem 0 0 0"]}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Heading>About us</Heading>
      <Center p={"3rem 0 3rem 0"}>
        <Box
          width={"10rem"}
          height={"0.1rem"}
          bgColor={"foreground"}
          borderRadius={"1rem"}
        ></Box>
      </Center>
      <Heading
        size={"md"}
        color={"#BEB7A4"}
        width={["80%", null, "60%"]}
      >
        Maktaba manufacturers home to AMCO, has been a trusted leader in metal fabrication since 1978. Specializing in high-quality Piano Hinges, we offer tailored solutions for custom projects, ensuring every product meets your exact specifications. Our expertise extends to crafting precision-engineered components for various industries, providing innovative and durable solutions that stand the test of time.
      </Heading>
      <br/>
      <Heading size={"md"}
        color={"#BEB7A4"}
        width={["80%", null, "60%"]}
        marginBottom={"5%"}>Our comprehensive product range includes double slot channels with various bracket sizes, disco channels with clips, Z brackets, sliding door gear, slotted C channels, wall brackets, cable trays, and more. Each product is designed for optimal performance and reliability, whether for industrial, commercial, or residential applications. At MAKTABA MANUFACTURERS, we are committed to delivering unmatched quality and craftsmanship to meet the diverse needs of our customers.
</Heading>
      <Heading size={"md"}>Who we are</Heading>
      <br />
      <Text width={"70%"} marginBottom={"5%"}>
      We are a team of skilled professionals driven by a passion for precision and innovation. With over four decades of experience in metal fabrication, we focus on providing exceptional customer service, reliable solutions, and expertise across various industries. Our commitment to quality and craftsmanship sets us apart, making us a trusted partner for businesses seeking custom metal solutions that exceed expectations.
      </Text>

      <Heading size={"md"}>What we do</Heading>
      <br />
      <Text width={"70%"} marginBottom={"5%"}>
      At MAKTABA MANUFACTURERS, we focus on precision manufacturing and advanced laser cutting to deliver customized products. Using materials like mild steel (MS), stainless steel (SS), brass, and aluminum, we ensure every product meets your exact specifications. We also offer AutoCAD design services to assist in creating accurate, detailed product drawings.
      </Text>

      <SimpleGrid columns={2} h={["40vh", null, "80vh"]} spacing={"0.5rem"}>
        <Box h={["20vh", null, "40vh"]} width={"100%"}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="./people/img1.jpeg"
            alt="k"
          />
        </Box>
        <Box h={["20vh", null, "40vh"]} width={"100%"}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="./people/img2.jpeg"
            alt="p"
          />
        </Box>
        <Box h={["20vh", null, "40vh"]} width={"100%"}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="./people/img3.jpeg"
            alt="p"
          />
        </Box>
        <Box h={["20vh", null, "40vh"]} width={"100%"}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="./people/img4.jpeg"
            alt="p"
          />
        </Box>
      </SimpleGrid>
    </Flex>
  );
}
