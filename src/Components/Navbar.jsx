import {
  Flex,
  HStack,
  Link,
  Spacer,
  Box,
  Image,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      backgroundColor="background"
      color="foreground"
      w="100%"
      px={{ base: "1rem", md: "3rem", lg: "4rem" }}
      py={{ base: "0.5rem", md: "0", lg: "0" }}
    >
      {/* Logo container */}
      <Link as={ReactRouterLink} to="/">
        <Box
          w={{ base: "100px", sm: "120px", md: "150px", lg: "200px" }}
          flexShrink={0}               // so it never squashes below its min
        >
          <Image
            src="./logo.png"
            alt="logo"
            w="100%"
            h="auto"
            objectFit="contain"
          />
        </Box>
      </Link>

      {/* Navigation links */}
      <Spacer />

      <HStack
        as="ul"
        spacing="1.5rem"
        fontSize="md"
        display={{ base: "none", md: "flex" }}
      >
        {["/", "/about", "/services", "/products", "/contactus"].map(
          (path, i) => {
            const label = ["Home", "About", "Services", "Products", "Contact us"][i];
            return (
              <Link as={ReactRouterLink} to={path} key={path}>
                {label}
              </Link>
            );
          }
        )}
      </HStack>
    </Flex>
  );
}
