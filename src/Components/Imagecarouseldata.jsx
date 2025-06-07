/* eslint-disable react/prop-types */
import { Flex, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function Imagecarouseldata({ Links }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  let Images = Links.map(({ value, data, title }) => (
    <>
      <Flex key={data} justifyContent={"center"} h={"50vh"}>
        <img
          height={"50vh"}
          width={"auto"}
          style={{ objectFit: "contain", maxWidth: "100%" }}
          src={value}
          alt={data}
        />
      </Flex>
      {title && (
        <Text fontWeight={"800"} textAlign={"center"}>
          {title}
        </Text>
      )}
      <br />
      {data && (
        <Text fontWeight={"800"} textAlign={"center"}>
          {data}
        </Text>
      )}
    </>
  ));

  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
      >
        {Images}
      </Carousel>
    </>
  );
}
