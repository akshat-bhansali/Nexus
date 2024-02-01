import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Link,
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
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bgColor={"foreground"}>drawer contents</DrawerHeader>
          <DrawerBody bgColor={"foreground"}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Consequat nisl vel pretium lectus quam id. Semper quis lectus
              nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
              quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
              magna eget est lorem. Erat imperdiet sed euismod nisi porta.
              Lectus vestibulum mattis ullamcorper velit.
            </p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
