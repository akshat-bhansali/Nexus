import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Image,
  VStack,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Services() {
  const allServices = [
    {
      title: "Brass & Aluminum Laser Cutting Expertise",
      images: ["./services/profile1.jpg", "./services/profile1-alt.jpg"],
      data: "Specializing in laser cutting for both brass and aluminum. Our advanced technology ensures smooth and accurate cuts for these materials.",
    },
    {
      title: "Advanced Laser Cutting (SS, MS, Aluminum, Brass)",
      images: ["./services/profile2-alt2.jpeg","./services/profile2.jpg"],
      data: "Offering top-notch laser cutting for stainless steel, mild steel, aluminum, and brass. We deliver high-quality cuts with unmatched precision.",
    },
    {
      title: "Stainless Steel Laser Cutting Services",
      images: ["./services/profile2-alt.jpeg","./services/industrial2.jpg"],
      data: "Providing expert laser cutting solutions for stainless steel. Our high-tech machines guarantee precise and clean cuts for all your requirements.",
    },
    {
      title: "Precision Cutting Solutions",
      images: ["./services/industrial1-alt.jpeg","./services/industrial1.jpg"],
      data: "We specialize in high-accuracy laser cutting for a variety of different metals. Our services ensure clean and sharp cuts for precise results.",
    },
    {
      title: "Metal Fabrication",
      images: ["./services/interior1.jpg", "./services/interior1-alt.jpeg"],
      data: "Full-service metal fabrication including cutting, bending, and welding. We bring your metalworking projects to life with precision and reliability.",
    },
    {
      title: "Styled in Steel",
      images: ["./services/interior2.jpg", "./services/interior2-alt.jpeg"],
      data: "We offer creative and customized laser cutting services tailored to interior design needs. Achieve intricate patterns and designs with our expertise.",
    },
    {
      title: "Stainless Steel Grill & Mesh",
      images: ["./services/jaali2.jpg", "./services/ss.jpeg"],
      data: "Expert cutting services for stainless steel grills and mesh (jaali). We deliver high-quality, precise results for all your stainless steel requirements.",
    },
    {
      title: "Mild Steel Grill & Mesh",
      images: ["./services/jaali1.jpg", "./services/jaali1-alt.jpeg"],
      data: "We offer precision cutting for mild steel grills and mesh also known as jaali. Our services ensure perfect cuts for your architectural or design needs.",
    },
    {
      title: "Custom Crafts",
      images: ["./services/customCrafts.jpg", "./services/customCrafts-alt.jpeg"],
      data: "From personalized keychains to tailor-made nameplates and industrial parts, we can laser cut whatever you imagine. We’ll turn ideas into reality with precision and perfection.",
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
        <Heading size="lg">
          Precision Meets Possibility: Custom Laser Cutting Services
        </Heading>
        <br />
        <Text>
          Welcome to Expert Laser Cutting by Maktaba Manufacturers — your
          one-stop solution for high-precision laser cutting in mild steel,
          stainless steel, aluminum, and brass. Whether it’s customized
          nameplates, designer keychains, industrial components, metal jali
          work, or profile cutting, we bring your ideas to life with accuracy,
          speed, and excellence.
        </Text>
        <br />
        <Text>
          From interior decor to industrial fittings, we cut it all — with
          unmatched quality and design flexibility.
        </Text>
      </Box>

      <SimpleGrid
  columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 3 }}
  spacing={{ base: "1.5rem", md: "2rem" }}
  px={{ base: "1rem", sm: "2rem", md: "4rem", lg: "10%", xl: "15%" }}
  pb={{ base: "2rem", md: "4rem" }}
>

        {allServices.map((item, idx) => (
          <Box
            key={idx}
            p="1.5rem"
            borderRadius="lg"
            textAlign="center"
            bg="rgba(255, 255, 255, 0.1)"
            _hover={{
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(8px)",
              bg: "rgba(255, 255, 255, 0.2)",
              transform: "scale(1.02)",
              transition: "all 0.3s ease-in-out",
            }}
            transition="all 0.3s ease-in-out"
          >
            <VStack spacing="1rem">
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={3000}
                stopOnHover
                dynamicHeight={false}
              >
                {item.images.map((imgSrc, i) => (
                  <Image
                    key={i}
                    src={imgSrc}
                    alt={`${item.title} ${i + 1}`}
                    boxSize="250px"
                    objectFit="cover"
                    borderRadius="md"
                  />
                ))}
              </Carousel>
              <Heading size="md">{item.title}</Heading>
              <Text fontSize="sm">{item.data}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}
