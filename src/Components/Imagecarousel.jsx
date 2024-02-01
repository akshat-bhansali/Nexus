/* eslint-disable react/prop-types */
import { Flex } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function Imagecarousel({ Links }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  let Images = Links.map(({ key, value }) => (
    <Flex key={key} justifyContent={"center"} h={"50vh"}>
      <img
        height={"auto"}
        width={"100%"}
        style={{ objectFit: "cover" }}
        src={value}
        alt="hi"
      />
    </Flex>
  ));

  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
      >
        {Images}
      </Carousel>
    </>
  );
}
