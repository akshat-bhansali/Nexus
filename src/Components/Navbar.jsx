import { Flex, HStack, Heading, Link, Spacer, Text, Box } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Flex
        hideBelow={"md"}
        as={"nav"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        backgroundColor={"background"}
        w={"100%"}
        color={"foreground"}
        h={"6rem"}
        gap={"1rem"}
        p={"0 4rem 0 3rem"}
        minWidth={"800px"}
      >
        <Link as={ReactRouterLink} to="/">
        <Box h={"18vh"} w={"10vw"}>
        <img
            style={{ height: "100%", width: "100%" }}
            src="./logo.png"
            alt="logo"
          />
          </Box>
        </Link>
        <Spacer />
        <HStack fontSize={"md"} spacing={"1.5rem"}>
          <Link as={ReactRouterLink} to="/">
            <Text>Home</Text>
          </Link>
          <Link as={ReactRouterLink} to="/about">
            <Text>About</Text>
          </Link>
          <Link as={ReactRouterLink} to="/products">
            <Text>Products</Text>
          </Link>
          <Link as={ReactRouterLink} to="/services">
            <Text>Servcies</Text>
          </Link>
          <Link as={ReactRouterLink} to="/contactus">
            <Text>Contact us</Text>
          </Link>
        </HStack>
      </Flex>
    </>
  );
}
