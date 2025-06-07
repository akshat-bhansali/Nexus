import { Text, Box, Heading, Flex } from "@chakra-ui/react";

export default function Footer() {
  let ImgList = [
    {
      imgsrc: "/Home1.jpg",
      h1: "Precision Laser Cutting",
      data: "We specialize in high-accuracy laser cutting, delivering intricate designs with clean edges on a variety of materials. Our advanced technology ensures precision, consistency, and superior quality in every cut.",
    },
    {
      imgsrc: "/Home2.jpg",
      h1: "Custom Piano Hinges",
      data: "We make customized piano hinges using expert laser cutting, allowing us to create any design or specification you need. Available in stainless steel, brass, and aluminum, tailored to your exact requirements.",
    },
    {
      imgsrc: "/Home3.jpg",
      h1: "Custom Metal Solutions",
      data: "Need laser cutting, bending, welding, or full product development in MS, SS, brass, or aluminum? From prototyping to large-scale production, we bring your ideas to life.",
    },
  ];
  let Imagesdiv = ImgList.map(({ imgsrc, h1, data }) => (
    <Flex
      key={imgsrc}
      p={"5%"}
      flexDirection={"column"}
      alignItems={"center"}
      width={["100%", null, "33%"]}
    >
      <Box width="200px" height="200px">
        <img
          src={imgsrc}
          width="100%"
          height="100%"
          style={{ objectFit: "cover", borderRadius: "8px" }}
        />
      </Box>
      <Flex p={"10% 0 0 0"} gap={"10px"} flexDirection={"column"}>
        <Heading size={"md"}>{h1}</Heading>
        <Text>{data}</Text>
      </Flex>
    </Flex>
  ));
  
  return (
    <>
      <Box textAlign={"center"} p={"10vh 0 0vh 0"}>
        <Heading p={"2% 0 1% 0"}>AMCO</Heading>
        <Heading size={"md"} p={["5% 10% 5% 10%", null, "1% 25% 1% 25%"]}>
        Since 1978, Maktaba Manufacturers, home to AMCO, has been a leader in custom metal fabrication and precision laser cutting. We create high-quality components like piano hinges, sliding door gears and more in MS, SS, brass, and aluminum.
        </Heading>
        
        <Flex
          flexDirection={["column", null, "row"]}
          textAlign={"center"}
          alignItems={"center"}
        >
          {Imagesdiv}
        </Flex>
        <Heading size={"md"} p={["5% 10% 5% 10%", null, "1% 25% 1% 25%"]}>
        Our Mission
        </Heading>
        <Text p={["5% 10% 5% 10%", null, "1% 25% 4% 25%"]}>
        To provide high-quality, precise, and smooth Expert Laser Cutting solutions to our customers, ensuring timely delivery and cost-effectiveness. We are committed to incorporating the latest technologies and offering innovative services and solutions.
        </Text>
      </Box>
    </>
  );
}
