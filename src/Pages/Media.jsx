import { useState } from "react";
import ReactPaginate from "react-paginate";
import "../assets/Paginate.css";
import data from "../assets/data2.json";
import {
  Box,
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Media() {
  const items = data.items;
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 9;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / 9);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 9) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <Heading
        m={["3rem 0 0 0", null, "3rem 0 0 0"]}
        size={["sm", null, "md"]}
        textAlign={"center"}
      >
        Media
      </Heading>
      <Center p={"3rem 0 3rem 0"}>
        <Box
          width={"10rem"}
          height={"0.1rem"}
          bgColor={"foreground"}
          borderRadius={"1rem"}
        ></Box>
      </Center>
      <SimpleGrid
        spacing={"15px"}
        width={"70%"}
        columns={[1, null, 3]}
        margin={"auto"}
        marginBottom={"4rem"}
      >
        <Items currentItems={currentItems} />
      </SimpleGrid>
      <ReactPaginate
        containerClassName={"pagination"}
        activeClassName={"active"}
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
function Items({ currentItems }) {
  return currentItems.map(({ imgsrc, headline, text, link }) => (
    <>
      <Card
        boxShadow={"5px 5px 5px rgb(255,255,255,0.5)"}
        direction={["column", null, "row"]}
        overflow="hidden"
        variant="outline"
        bgColor={"foreground"}
        color={"background"}
      >
        {imgsrc && (
          <Image
            objectFit="cover"
            maxW={["100%", null, "40%"]}
            src={imgsrc}
            alt={headline}
          />
        )}

        <Stack>
          <CardBody bgColor={"foreground"} color={"background"}>
            <Heading
              size="sm"
              h={"1rem"}
              textOverflow={"ellipsis"}
              overflow={"hidden"}
              width={["100%", null, "200px"]}
              whiteSpace={"nowrap"}
              bgColor={"foreground"}
              color={"background"}
            >
              {headline}
            </Heading>

            <Text
              py="2"
              size={"sm"}
              h={"3.5rem"}
              overflow={"hidden"}
              textOverflow={"ellipsis"}
              bgColor={"foreground"}
              color={"background"}
            >
              {text}
            </Text>
            <Link href={link} isExternal>
              <b>Read More</b>
            </Link>
            <Text color={"gray"} size={"0.2rem"}>
              {" "}
              23 september 2023
            </Text>
          </CardBody>
        </Stack>
      </Card>
    </>
  ));
}
