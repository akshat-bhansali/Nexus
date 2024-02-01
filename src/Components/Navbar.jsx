import { Flex, HStack, Heading, Link, Spacer, Text } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";

export default function Navbar() {
  // const [matches, setMatches] = useState(
  //   window.matchMedia("(min-width: 768px)").matches
  // );

  // useEffect(() => {
  //   window
  //     .matchMedia("(min-width: 768px)")
  //     .addEventListener("change", (e) => setMatches(e.matches));
  // }, []);

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
          <Heading>logo</Heading>
        </Link>
        <Spacer />
        <HStack fontSize={"md"} spacing={"1.5rem"}>
          <Link as={ReactRouterLink} to="/">
            <Text>home</Text>
          </Link>
          <Link as={ReactRouterLink} to="/about">
            <Text>about</Text>
          </Link>
          <Link as={ReactRouterLink} to="/buisness">
            <Text>buisnesses</Text>
          </Link>
          <Link as={ReactRouterLink} to="/investors">
            <Text>investors</Text>
          </Link>
          <Link as={ReactRouterLink} to="/foundation">
            <Text>foundation</Text>
          </Link>
          <Link as={ReactRouterLink} to="/media">
            <Text>media</Text>
          </Link>
          <Text>careers</Text>
          <Link as={ReactRouterLink} to="/contactus">
            <Text>contact us</Text>
          </Link>
        </HStack>
      </Flex>
    </>
  );
}
