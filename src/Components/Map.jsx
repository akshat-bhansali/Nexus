/* eslint-disable react/prop-types */
import { Box, Button, Heading, Link, Text } from "@chakra-ui/react";

export default function Map({ height, width }) {
  return (
    <>
      <Box height={height} width={width} position={"relative"}>
        <Box
          hideBelow={"md"}
          position={"absolute"}
          zIndex={"1"}
          bgColor={"rgba(247, 249, 247, 0.9)"}
          color={"background"}
          right={"10%"}
          bottom={"10%"}
          w={"30%"}
          h={"80%"}
          minWidth={"400px"}
          p={"3rem"}
        >
          <Heading size={"lg"}>Visit us in store</Heading>
          <br />
          <Text>30 Lamb&apos;s Conduit Street</Text>
          <Text>London, WC1N 3LE</Text>
          <Text>Monday - Saturday 11am - 7pm</Text>
          <Text> Walk-ins & Appointments Welcome</Text>
          <br />
          <br />
          <Link href="https://maps.app.goo.gl/rj5Bz98xHSqjJ3Cm7" isExternal>
            <Button color={"foreground"} bgColor={"background"} width={"30%"}>
              Directions
            </Button>
          </Link>
        </Box>
        <iframe
          style={{ border: "5px solid #F7F9F7" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14244.302228703269!2d81.02024255!3d26.8057227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfb177ba59213%3A0xfd12dad33afbc85d!2sPhoenix%20Palassio!5e0!3m2!1sen!2sin!4v1706482460883!5m2!1sen!2sin"
          width="100%"
          height="100%"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </>
  );
}
