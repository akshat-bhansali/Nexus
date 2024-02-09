import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export default function NavbarMob() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        hideFrom={"md"}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={"1rem"}
      >
        <Link as={ReactRouterLink} to="/">
          <Heading>logo</Heading>
        </Link>
        <IconButton icon={<HamburgerIcon />} onClick={onOpen} />
      </Flex>
      <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
        <DrawerOverlay />
        <DrawerContent bgColor={"rgba(0, 0, 0, 0.6)"}>
          <DrawerCloseButton color={"foreground"} />
          {/* <DrawerHeader textAlign="center" bgColor={"foreground"}>
            <Heading>Menu</Heading>
          </DrawerHeader> */}
          <DrawerBody
            display={"flex"}
            flexDirection={"column"}
            padding={"1rem 0 4rem 0"}
            justifyContent={"space-evenly"}
            textAlign={"center"}
            bgColor={"rgba(0, 0, 0, 0.6)"}
            color={"foreground"}
            fontSize={"2xl"}
          >
            <Link as={ReactRouterLink} onClick={onClose} to="/">
              <Text>Home</Text>
            </Link>
            <Link as={ReactRouterLink} onClick={onClose} to="/about">
              <Text>About</Text>
            </Link>
            <Link as={ReactRouterLink} to="/products">
              <Text>Products</Text>
            </Link>
            <Link as={ReactRouterLink} onClick={onClose} to="/buisness">
              <Text>Buisnesses</Text>
            </Link>
            <Link as={ReactRouterLink} onClick={onClose} to="/investors">
              <Text>Investors</Text>
            </Link>
            <Link as={ReactRouterLink} onClick={onClose} to="/foundation">
              <Text>Foundation</Text>
            </Link>
            <Link as={ReactRouterLink} onClick={onClose} to="/media">
              <Text>Media</Text>
            </Link>
            <Link as={ReactRouterLink} onClick={onClose} to="/careers">
              <Text>Careers</Text>
            </Link>
            <Link as={ReactRouterLink} onClick={onClose} to="/contactus">
              <Text>Contact us</Text>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
