import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Spacer,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Products", to: "/products" },
    { label: "Contact us", to: "/contactus" },
  ];

  return (
    <>
      <Flex
        as="nav"
        align="center"
        px={{ base: "1rem", md: "3rem", lg: "4rem" }}
        py="1rem"
        bg="background"
        color="foreground"
      >
        {/* Logo */}
        <Link as={RouterLink} to="/">
          <Box w={{ base: "80px", sm: "100px", md: "150px" }} flexShrink={0}>
            <Image src="./logo.png" alt="logo" w="100%" h="auto" />
          </Box>
        </Link>

        {/* This spacer pushes everything that follows to the right */}
        <Spacer />

        {/* Desktop Links */}
        <HStack
          as="ul"
          spacing="1.5rem"
          fontSize="md"
          display={{ base: "none", md: "flex" }}
        >
          {navItems.map((item) => (
            <Link as={RouterLink} to={item.to} key={item.to}>
              <Text>{item.label}</Text>
            </Link>
          ))}
        </HStack>

        {/* Mobile Hamburger */}
        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          ml={{ base: "auto", md: 0 }}  // ensure it hugs the right on mobile
        />
      </Flex>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} onClose={onClose} placement="left" size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton mt="6px" />
          <DrawerBody pt="4rem">
            <VStack spacing="1.5rem" align="start">
              {navItems.map((item) => (
                <Link
                  as={RouterLink}
                  to={item.to}
                  key={item.to}
                  onClick={onClose}
                  w="100%"
                >
                  <Text fontSize="xl">{item.label}</Text>
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
