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
          <Text>Shop no 17, 11, Coal Bunder Rd, opposite reti makan, Darukhana, Byculla, Mumbai, Maharashtra 400010</Text>
          <Text>Monday - Saturday 10:30am - 7:30pm</Text>
          <br />
          <br />
          <Link href="https://maps.app.goo.gl/273grnt2gCDfKKpE7?g_st=iwb" isExternal>
            <Button color={"foreground"} bgColor={"background"} width={"30%"}>
              Directions
            </Button>
          </Link>
        </Box>
        <iframe
          style={{ border: "5px solid #F7F9F7" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.0285644149703!2d72.8470085746345!3d18.974345855157082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cff3826cba3d%3A0x3b589a097fa16413!2sMaktaba%20Manufacturers!5e0!3m2!1sen!2sin!4v1738588151029!5m2!1sen!2sinn"
          width="100%"
          height="100%"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
   </Box>
    </>
  );
}
