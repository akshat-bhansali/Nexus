import { Text, Box, Heading, Flex } from "@chakra-ui/react";

export default function Footer() {
  let ImgList = [
    {
      imgsrc: "/img.png",
      h1: "Sovix",
      h2: "A Media Victory",
      data: "We worked through a successful rebranding with Sovix a few years ago. It was a long and challenging process, but in the end—not surprisingly—we came out with spectacular results",
    },
    {
      imgsrc: "/img2.png",
      h1: "Polar",
      h2: "A Big Win for Our Client",
      data: "We successfully represented Polar in a high profile campaign just last year. We guided them throughout several challenging media interviews, resulting in a major win.",
    },
    {
      imgsrc: "/img3.png",
      h1: "Itaka",
      h2: "One of Our Most Successful Campaigns",
      data: "We represented Itaka over a period of several months. We were there every step of the way, leveraging connections with media outlets to attract target audiences and ensure maximum coverage.",
    },
  ];
  let Imagesdiv = ImgList.map(({ imgsrc, h1, h2, data }) => (
    <Box key={imgsrc} p={"5%"}>
      <img src={imgsrc} />
      <Flex p={"10% 0 0 0"} gap={"10px"} flexDirection={"column"}>
        <Heading size={"md"}>{h1}</Heading>
        <Heading size={"sm"}>{h2}</Heading>
        <Text>{data}</Text>
      </Flex>
    </Box>
  ));
  return (
    <>
      <Box textAlign={"center"} p={"5vh 0 5vh 0"}>
        <Heading p={"2% 0 1% 0"}>Clients</Heading>
        <Heading size={"md"}>Excellence Unchallanged</Heading>
        <Text p={["5% 10% 5% 10%", null, "1% 25% 4% 25%"]}>
          We have a very simple yet powerful mission: we believe in doing
          excellent work with great clients. From ideation to implementation, we
          communicate closely with everyone we work with to ensure great
          results. Check out some of our clients below.
        </Text>
        <Flex flexDirection={["column", null, "row"]}>{Imagesdiv}</Flex>
      </Box>
    </>
  );
}
