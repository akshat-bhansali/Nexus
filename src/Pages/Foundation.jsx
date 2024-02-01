import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Imagecarouseldata from "../Components/Imagecarouseldata";

export default function Foundation() {
  let links = [
    {
      key: 1,
      value:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      data: "this is some text data to enter etc etcthis is some text data to enter etc etcthis is some text data to enter etc etcthis is some text data to enter etc etcthis is some text data to enter etc etcthis is some text dac",
    },
    {
      key: 2,
      value:
        "https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      data: "this is some text data to enter etc etcthis is some text data to enter etc etcthis is some text data to enter etc etcthis is some text data to enter etc etcthis is some text data to enter etc etcthis is some text dac",
    },
    {
      key: 4,
      value:
        "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      data: "this is some text data to enter etc etcthis is some text data to enter etc etcthis is some text data to enter etc etcthis is some text data to enter etc etcthis is some text data to enter etc etcthis is some text dac",
    },
  ];
  return (
    <>
      <Box height={"30vh"} width={"100%"}>
        <img
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
          src="https://thumbs.dreamstime.com/b/widescreen-unfocused-winter-background-snowfall-strolling-people-distance-walking-snow-slide-238737315.jpg"
        />
      </Box>
      <Box width={"100%"} p={"4rem 15% 4rem 15%"}>
        <br />
        <Heading size={"lg"}>Nexus Foundation</Heading>
        <br />
        <Text>
          <b>Nexus</b> Group believes in sustainable value creation for society.
          As a responsible corporate house, RattanIndia Foundation has had been
          giving back to the society by addressing the grass root social and
          development issues. Since, its inception, the Foundation has been
          empowering rural communities to enrich their lives.
        </Text>
        <br />
        <Text>
          The Foundation’s focus areas are Education, Health & Nutrition, Skill
          Development, Environment, Infrastructure and Drinking Water facility.
          Through a strong field presence, it operates across different rural
          locations near Maharashtra with priority to develop communities at
          grass root level in various parts of the country.
        </Text>
        <br />
        <Text>
          The Foundation also reaches out to communities to contribute towards
          India’s social development in a meaningful way. During the Covid-19
          pandemic, the Foundation supported various communities & families by
          providing food and healthcare facilities across Maharashtra.
        </Text>
      </Box>
      <SimpleGrid
        margin={"auto"}
        spacing={"2rem"}
        columns={[1, 1, 2]}
        width={"70%"}
      >
        <Box>
          <Heading size={"md"}> Health </Heading>
          <br />
          <Imagecarouseldata Links={links} />
        </Box>
        <Box>
          <Heading size={"md"}> Infrastructure </Heading>
          <br />
          <Imagecarouseldata Links={links} />
        </Box>
        <Box>
          <Heading size={"md"}> SKill development </Heading>
          <br />
          <Imagecarouseldata Links={links} />
        </Box>
        <Box>
          <Heading size={"md"}> Enviroment conservation </Heading>
          <br />
          <Imagecarouseldata Links={links} />
        </Box>
      </SimpleGrid>
    </>
  );
}
