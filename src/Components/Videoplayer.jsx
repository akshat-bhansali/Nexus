import { Box, Heading, Text } from "@chakra-ui/react";

export default function Videoplayer() {
  return (
    <>
      <Box w={"100%"} height={"90vh"} minWidth={[null, null, "800px"]}>
        <Box
          position={"absolute"}
          zIndex={"1"}
          bgColor={"rgba(218, 213, 205, 0.5)"}
          color={"black"}
          right={"0"}
          w={["100%", null, "50%"]}
          h={"90vh"}
          minWidth={"400px"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Heading zIndex={"3"} padding={"0 10%"} textAlign={"center"}>
            Maktaba Manufacturers
          </Heading>
          <Text zIndex={"3"} padding={"0 10%"} textAlign={"center"}>
            Expert Laser Cutting Services
          </Text>
        </Box>

        <video
          style={{ height: "90vh", width: "100%", objectFit: "cover" }}
          // src="/production_id_4818368 (2160p).mp4"
          src="video.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        />
      </Box>
    </>
  );
}
