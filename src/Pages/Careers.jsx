import {
  Box,
  Button,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

export default function Careers() {
  return (
    <>
      <SimpleGrid
        columns={[1, null, 2]}
        templateAreas={[`"img" "text"`, null, `"text img"`]}
      >
        <Box
          margin={"auto"}
          width={"60%"}
          gridArea={"text"}
          padding={"3rem 0 3rem 0"}
        >
          <Heading size={"sm"}>Careers at slack</Heading>
          <Heading size={"lg"}>work with us</Heading>
          <Text>
            Explore remote-friendly, flexible opportunities and join our mission
            to make work life simpler, more pleasant and more productive.
            Explore remote-friendly, flexible opportunities and join our mission
            to make work life simpler, more pleasant and more productive.
          </Text>
          <br />
          <Link
            href="https://www.linkedin.com/?trk=seo-authwall-base_nav-header-logo"
            isExternal
          >
            <Button>View Careers</Button>
          </Link>
        </Box>
        <Image
          margin={"auto"}
          width={"90%"}
          gridArea={"img"}
          src="/car.png"
        ></Image>
      </SimpleGrid>
    </>
  );
}
