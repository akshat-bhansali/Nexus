import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "../assets/Paginate.css";
import data from "../assets/data3.json";
import {
  Card,
  CardBody,
  Flex,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Imagecarouseldata from "../Components/Imagecarouseldata";

export default function Products() {
  const [itemOffset, setItemOffset] = useState(0);
  const [searchVal, setSearchVal] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const items = data.products.filter((item) =>
    item.name.toLowerCase().includes(searchVal.toLowerCase())
  );

  const endOffset = itemOffset + 14;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / 14);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 14) % items.length;
    setItemOffset(newOffset);
    setPageNumber(event.selected);
  };

  const handleSearchChange = (e) => {
    setSearchVal(e.target.value);
    setPageNumber(0);
    setItemOffset(0);
  };

  function Items({ currentItems }) {
    return currentItems.map(({ id, name, description, img, img2, img3, img4,img5,img6 }) => {
      const imageLinks = [
        { key: 1, value: img },
        img2 && { key: 2, value: img2 },
        img3 && { key: 3, value: img3 },
        img4 && { key: 4, value: img4 },
        img5 && { key: 5, value: img5 },
        img6 && { key: 6, value: img6 },
      ].filter(Boolean);
      return (
        <Card
          boxShadow={"5px 5px 5px rgb(255,255,255,0.5)"}
          direction={["column", null, "row"]}
          overflow="hidden"
          variant="outline"
          bgColor={"foreground"}
          color={"background"}
          key={id}
        >
          <CardBody bgColor={"foreground"} color={"background"} width={"100%"}>
            <Imagecarouseldata Links={imageLinks} />
            <Stack mt="6" spacing="3">
              <Heading size="md">{name}</Heading>
              <Text>{description}</Text>
            </Stack>
          </CardBody>
        </Card>
      );
    });
  }

  return (
    <>
      <Flex
        margin={"auto"}
        width={["90%", null, "70%"]}
        direction={["column", null, "row"]}
        alignItems={"center"}
        justifyContent={"space-between"}
        marginBottom={"4rem"}
        gap={"10px"}
      >
        <Heading>Products</Heading>
        <Input
          width={["100%", null, "50%"]}
          value={searchVal}
          onChange={handleSearchChange}
        />
      </Flex>
      <SimpleGrid
        spacing={"15px"}
        width={"70%"}
        columns={[1, null, 2]}
        margin={"auto"}
        marginBottom={"4rem"}
      >
        <Items currentItems={currentItems} />
      </SimpleGrid>
      {/* <ReactPaginate
        containerClassName={"pagination"}
        activeClassName={"active"}
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        initialPage={pageNumber}
        forcePage={pageNumber}
        renderOnZeroPageCount={() => (
          <Heading width={"70%"} margin={"auto"}>
            No Products Found :(
          </Heading>
        )}
      /> */}
    </>
  );
}
