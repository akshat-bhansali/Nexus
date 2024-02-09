import { useState } from "react";
import ReactPaginate from "react-paginate";
import "../assets/Paginate.css";
import data from "../assets/data3.json";
import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Products() {
  const [itemOffset, setItemOffset] = useState(0);
  const [searchVal, setSearchVal] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const items = data.products.filter((item) => {
    if (item.name.toLowerCase().includes(searchVal.toLowerCase())) {
      return item;
    }
  });

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
    setPageNumber(event.selected); // Update page number when pagination changes
  };

  const handleSearchChange = (e) => {
    setSearchVal(e.target.value);
    setPageNumber(0); // Reset page number to 0 when search value changes
    setItemOffset(0); // Reset item offset to 0 when search value changes
  };

  function Items({ currentItems }) {
    return currentItems.map(({ id, name, description, img, price }) => (
      <>
        <Card
          boxShadow={"5px 5px 5px rgb(255,255,255,0.5)"}
          direction={["column", null, "row"]}
          overflow="hidden"
          variant="outline"
          bgColor={"foreground"}
          color={"background"}
          key={id}
        >
          <CardBody bgColor={"foreground"} color={"background"}>
            <Image
              width={"100%"}
              src={img}
              alt={name}
              objectFit={"cover"}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{name}</Heading>
              <Text>{description}</Text>
              <Text color="blue.600" fontSize="2xl">
                {price}
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </>
    ));
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
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        initialPage={pageNumber} // Set the initial page number
        forcePage={pageNumber} // Force the page number to update
        renderOnZeroPageCount={() => {
          return (
            <Heading width={"70%"} margin={"auto"}>
              No Products Found :(
            </Heading>
          );
        }}
      />
    </>
  );
}
