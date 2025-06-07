import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Imagecarouseldata from "../Components/Imagecarouseldata";

export default function Services() {
  let jaali = [
    {
      key: 1,
      title:"Stainless Steel Grill & Mesh",
      value:
        "./services/jaali2.jpg",
      data: "Expert cutting services for stainless steel grills and mesh (jaali). We deliver high-quality, precise results for all your stainless steel requirements.",
    },
    {
      key: 2,
      title:"Mild Steel Grill & Mesh",
      value:
        "./services/jaali1.jpg",
      data: "We offer precision cutting for mild steel grills and mesh (jaali). Our services ensure perfect cuts for your architectural or design needs.",
    }
  ];
  let industrialWork = [
    {
      key: 1,
      title:"Stainless Steel Laser Cutting Services",
      value:
        "./services/industrial2.jpg",
      data: "Providing expert laser cutting solutions for stainless steel. Our high-tech machines guarantee precise and clean cuts for all your requirements.",
    },
    {
      key: 2,
      title:"Precision Metal Cutting Solutions",
      value:
        "./services/industrial1.jpg",
      data: "We specialize in high-accuracy laser cutting for a variety of metals. Our services ensure clean, sharp cuts for precise results.",
    }
  ];
  let interior = [
    {
      key: 1,
      title:"Metal Fabrication",
      value:
        "./services/interior1.jpg",
      data: "Full-service metal fabrication including cutting, bending, and welding. We bring your metalworking projects to life with precision and reliability.",
    },
    {
      key: 2,
      title:"Styled in Steel",
      value:
        "./services/interior2.jpg",
      data: "We offer creative and customized laser cutting services tailored to interior design needs. Achieve intricate patterns and designs with our expertise.",
    }
  ];
  let profileCutting = [
    {
      key: 1,
      title:"Brass & Aluminum Laser Cutting Expertise",
      value:
        "./services/profile1.jpg",
      data: "Specializing in laser cutting for both brass and aluminum. Our advanced technology ensures smooth and accurate cuts for these materials.",
    },
    {
      key: 2,
      title:"Advanced Laser Cutting for Metals (SS, MS, Aluminum, Brass)",
      value:
        "./services/profile2.jpg",
      data: "Offering top-notch laser cutting for stainless steel, mild steel, aluminum, and brass. We deliver high-quality cuts with unmatched precision.",
    }
  ];
  return (
    <>
      <Box height={"30vh"} width={"100%"}>
        <img
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
          src="https://thumbs.dreamstime.com/b/widescreen-unfocused-winter-background-snowfall-strolling-people-distance-walking-snow-slide-238737315.jpg"
        />
      </Box>
      <Box width={"100%"} p={"4rem 15% 4rem 15%"}>
        <br />
        <Heading size={"lg"}>Nexus Foundation</Heading>
        <br />
        <Text>
          <b>Nexus</b> Group believes in sustainable value creation for society.
          As a responsible corporate house, RattanIndia Foundation has had been
          giving back to the society by addressing the grass root social and
          development issues. Since, its inception, the Foundation has been
          empowering rural communities to enrich their lives.
        </Text>
        <br />
        <Text>
          The Foundation’s focus areas are Education, Health & Nutrition, Skill
          Development, Environment, Infrastructure and Drinking Water facility.
          Through a strong field presence, it operates across different rural
          locations near Maharashtra with priority to develop communities at
          grass root level in various parts of the country.
        </Text>
        <br />
        <Text>
          The Foundation also reaches out to communities to contribute towards
          India’s social development in a meaningful way. During the Covid-19
          pandemic, the Foundation supported various communities & families by
          providing food and healthcare facilities across Maharashtra.
        </Text>
      </Box>
      <SimpleGrid
        margin={"auto"}
        spacing={"2rem"}
        columns={[1, 1, 2]}
        width={"70%"}
      >
        <Box>
          <Heading size={"md"}>Profile Cutting</Heading>
          <br />
          <Imagecarouseldata Links={profileCutting} />
        </Box>
        <Box>
          <Heading size={"md"}>Industrial Work</Heading>
          <br />
          <Imagecarouseldata Links={industrialWork} />
        </Box>
        <Box>
          <Heading size={"md"}>Interiors Reimagined</Heading>
          <br />
          <Imagecarouseldata Links={interior} />
        </Box>
        <Box>
          <Heading size={"md"}>Perforated Panel (Jaali)</Heading>
          <br />
          <Imagecarouseldata Links={jaali} />
        </Box>
      </SimpleGrid>
    </>
  );
}
