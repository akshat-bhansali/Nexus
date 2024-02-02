import { Box, Heading } from "@chakra-ui/react";

export default function Videoplayer() {
  return (
    <>
      <Box w={"100%"} height={"90vh"} minWidth={[null, null, "800px"]}>
        <Box
          position={"absolute"}
          zIndex={"1"}
          bgColor={"rgba(218, 213, 205, 0.5)"}
          color={"white"}
          right={"0"}
          w={["100%", null, "50%"]}
          h={"90vh"}
          minWidth={"400px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading zIndex={"3"} padding={"0 10%"}>
            We’re Fushion Lifestyles Dedicated to your Success
          </Heading>
        </Box>

        <video
          style={{ height: "90vh", width: "100%", objectFit: "cover" }}
          // src="/production_id_4818368 (2160p).mp4"
          src="https://v3.cdnpk.net/videvo_files/video/premium/partners0243/large_watermarked/BB_e81dc605-6b8b-4674-b939-26bb2051eb36_FPpreview.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        />
      </Box>
    </>
  );
}
