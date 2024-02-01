import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";

export default function Buisness() {
  return (
    <>
      <Heading
        m={["3rem 0 0 0", null, "3rem 0 0 0"]}
        size={["sm", null, "md"]}
        textAlign={"center"}
      >
        Our Buisnesses
      </Heading>
      <Center p={"3rem 0 1rem 0"}>
        <Box
          width={"10rem"}
          height={"0.1rem"}
          bgColor={"foreground"}
          borderRadius={"1rem"}
        ></Box>
      </Center>
      <Center>
        <SimpleGrid
          templateAreas={[
            `"img1" "img2" "b1" "b1stat" "b2" "b2stat"`,
            null,
            `"img1 img2"
                  "b1 b1stat"
                  "b2stat b2"`,
          ]}
          columns={[1, null, 2]}
          width={"80%"}
          spacing={["20px", null, "0px"]}
          margin={"3rem 0 0 0"}
        >
          <Center gridArea={"img1"}>
            <img
              height={"80%"}
              width={"80%"}
              style={{ objectFit: "cover", borderRadius: "10px" }}
              src={
                "https://localiq.com/wp-content/uploads/2021/12/about-us-page-examples-mailchimp.png"
              }
            />
          </Center>
          <Center gridArea={"img2"}>
            <img
              height={"80%"}
              width={"80%"}
              style={{ objectFit: "cover", borderRadius: "10px" }}
              src={
                "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
              }
            />
          </Center>

          <Box p={"10%"} gridArea={"b1"}>
            <Heading size={"md"}>Buisness 1</Heading>
            <br />
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus rem laboriosam expedita asperiores necessitatibus
              omnis?
            </Text>
            <br />
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus rem laboriosam expedita asperiores necessitatibus
              omnis?
            </Text>
            <br />
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus rem laboriosam expedita asperiores necessitatibus
              omnis?
            </Text>
          </Box>

          <Center gridArea={"b1stat"}>
            <StatGroup
              bgColor={"foreground"}
              color={"background"}
              borderRadius={"20px"}
              p={"2rem"}
              width={"80%"}
            >
              <Stat m={"0 10% 0 0"}>
                <StatLabel>Total Profit</StatLabel>
                <StatNumber>$50000000</StatNumber>

                <StatHelpText>feb 2003 - jan 2024</StatHelpText>
              </Stat>
              <Stat m={"0 10% 0 0"}>
                <StatLabel>Total Profit</StatLabel>
                <StatNumber>$50000000</StatNumber>

                <StatHelpText>feb 2003 - jan 2024</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Monthly Profit</StatLabel>
                <StatNumber>$5000</StatNumber>

                <StatHelpText>
                  <StatArrow type="decrease" />
                  9.05%
                </StatHelpText>
              </Stat>
            </StatGroup>
          </Center>

          <Center gridArea={"b2stat"}>
            <StatGroup
              bgColor={"foreground"}
              color={"background"}
              borderRadius={"30px"}
              p={"2rem"}
              width={"80%"}
            >
              <Stat m={"0 10% 0 0"}>
                <StatLabel>Total Profit</StatLabel>
                <StatNumber>$50000000</StatNumber>

                <StatHelpText>feb 2003 - jan 2024</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Monthly Profit</StatLabel>
                <StatNumber>$5000</StatNumber>

                <StatHelpText>
                  <StatArrow type="increase" />
                  9.05%
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Monthly Profit</StatLabel>
                <StatNumber>$5000</StatNumber>

                <StatHelpText>
                  <StatArrow type="decrease" />
                  9.05%
                </StatHelpText>
              </Stat>
            </StatGroup>
          </Center>

          <Box p={"10%"} gridArea={"b2"}>
            <Heading size={"md"}>Buisness 2</Heading>
            <br />
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus rem laboriosam expedita asperiores necessitatibus
              omnis?
            </Text>
            <br />
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus rem laboriosam expedita asperiores necessitatibus
              omnis?
            </Text>
            <br />
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus rem laboriosam expedita asperiores necessitatibus
              omnis?
            </Text>
          </Box>
        </SimpleGrid>
      </Center>
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading size={"md"} m={"7% 0 3% 0"}>
          Partner Brands
        </Heading>
        <Image src="/partner.png" width={["90%", null, "50%"]} />
      </Flex>
    </>
  );
}
