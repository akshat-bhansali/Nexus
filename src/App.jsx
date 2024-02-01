import { Box, Spacer } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Footer2 from "./Components/Footer2";
import { Outlet } from "react-router-dom";
import "./assets/App.css";

function App() {
  const breakpoints = {
    base: "0px",
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  };
  const colors = {
    foreground: "#F7F9F7",
    background: "#03120e",
  };
  const fonts = {
    body: "Tahoma",
    heading: "Courier New",
  };
  const theme = extendTheme({ colors, fonts, breakpoints });

  return (
    <ChakraProvider theme={theme}>
      <Box minHeight={"100vh"} color={"foreground"} bgColor={"background"}>
        <Navbar />
        <Outlet />
        <Spacer />
        <Footer2 />
      </Box>
    </ChakraProvider>
  );
}

export default App;
