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
  let Images = Links.map(({ value, data }) => (
    <>
      <Flex key={data} justifyContent={"center"} h={"50vh"}>
        <img
          height={"auto"}
          width={"100%"}
          style={{ objectFit: "cover" }}
          src={value}
          alt={data}
        />
      </Flex>
      {data && (
        <Text fontWeight={"800"} textAlign={"center"}>
          {data}
        </Text>
      )}
    </>
  ));

  return (
    <>
      <Carousel responsive={responsive} infinite={true}>
        {Images}
      </Carousel>
    </>
  );
}
