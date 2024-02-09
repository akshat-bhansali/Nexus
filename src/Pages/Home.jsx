import Videoplayer from "../Components/Videoplayer";
import Textcolumn from "../Components/Textcolumn";
import Imagecarousel from "../Components/Imagecarousel";
import Grid4 from "../Components/Grid4";
import Footer from "../Components/Footer";
import { Box } from "@chakra-ui/react";

export default function Home() {
  let links = [
    {
      key: 1,
      value:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      key: 2,
      value:
        "https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      key: 4,
      value:
        "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    },
  ];
  return (
    <Box className="animatefade">
      <Videoplayer />
      {/* <Textcolumn
        thisText={
          "lorem sfkn dsfkdsfnjk fsdnkfdsnk fjkdssfjndd dfsnfdndsf ksdfnlorem sfkn dsfkdsfnjk fsdnkfdsnk fjkdssfjndd dfsnfdndsf ksdfnlorem sfkn dsfkdsfnjk fsdnkfdsnk fjkdssfjndd dfsnfdndsf ksdflorem sfkn dsfkdsfnjk fsdnkfdsnk fjkdssfjndd dfsnfdndsf ksdfn"
        }
        thisHeading={"hello"}
      />
      <Imagecarousel Links={links} />
      <Textcolumn
        thisHeading={"Hot off the press"}
        thisText={"do something for free bruh"}
      />
      <Grid4 /> */}
      <Footer />
    </Box>
  );
}
