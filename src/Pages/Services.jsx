import { Box, Heading, SimpleGrid, Text, Image, VStack } from "@chakra-ui/react";

export default function Services() {
  const allServices = [
    {
      title: "Brass & Aluminum Laser Cutting Expertise",
      value: "./services/profile1.jpg",
      data: "Specializing in laser cutting for both brass and aluminum. Our advanced technology ensures smooth and accurate cuts for these materials.",
    },
    {
      title: "Advanced Laser Cutting for Metals (SS, MS, Aluminum, Brass)",
      value: "./services/profile2.jpg",
      data: "Offering top-notch laser cutting for stainless steel, mild steel, aluminum, and brass. We deliver high-quality cuts with unmatched precision.",
    },
    {
      title: "Stainless Steel Laser Cutting Services",
      value: "./services/industrial2.jpg",
      data: "Providing expert laser cutting solutions for stainless steel. Our high-tech machines guarantee precise and clean cuts for all your requirements.",
    },
    {
      title: "Precision Metal Cutting Solutions",
      value: "./services/industrial1.jpg",
      data: "We specialize in high-accuracy laser cutting for a variety of metals. Our services ensure clean, sharp cuts for precise results.",
    },
    {
      title: "Metal Fabrication",
      value: "./services/interior1.jpg",
      data: "Full-service metal fabrication including cutting, bending, and welding. We bring your metalworking projects to life with precision and reliability.",
    },
    {
      title: "Styled in Steel",
      value: "./services/interior2.jpg",
      data: "We offer creative and customized laser cutting services tailored to interior design needs. Achieve intricate patterns and designs with our expertise.",
    },
    {
      title: "Stainless Steel Grill & Mesh",
      value: "./services/jaali2.jpg",
      data: "Expert cutting services for stainless steel grills and mesh (jaali). We deliver high-quality, precise results for all your stainless steel requirements.",
    },
    {
      title: "Mild Steel Grill & Mesh",
      value: "./services/jaali1.jpg",
      data: "We offer precision cutting for mild steel grills and mesh (jaali). Our services ensure perfect cuts for your architectural or design needs.",
    },
    {
      title: "Custom Crafts",
      value: "./services/customCrafts.jpg",
      data: "From personalized keychains to tailor-made nameplates and custom industrial parts — we can laser cut whatever you imagine. Just share your design or idea, and we’ll turn it into reality with precision and perfection.",
    },
  ];

  return (
    <>
      <Box height="30vh" width="100%">
        <img
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
          src="./banner.jpeg"
          alt="Header"
        />
      </Box>

      <Box width="100%" p="4rem 15%">
        <Heading size="lg">Precision Meets Possibility: Custom Laser Cutting Services</Heading>
        <br />
        <Text>
        Welcome to Expert Laser Cutting by Maktaba Manufacturers — your one-stop solution for high-precision laser cutting in mild steel, stainless steel, aluminum, and brass. Whether it’s customized nameplates, designer keychains, industrial components, metal jali work, or profile cutting, we bring your ideas to life with accuracy, speed, and excellence.
        </Text>
        <br />
        <Text>
        From interior decor to industrial fittings, we cut it all — with unmatched quality and design flexibility.
        </Text>
      </Box>

      <SimpleGrid columns={[1, 3]} spacing="2rem" px="15%" pb="4rem">
        {allServices.map((item, idx) => (
          <VStack key={idx} spacing="1rem" textAlign="center">
            <Image src={item.value} alt={item.title} boxSize="250px" objectFit="cover" />
            <Heading size="md">{item.title}</Heading>
            <Text fontSize="sm">{item.data}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </>
  );
}
