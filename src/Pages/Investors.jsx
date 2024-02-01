import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import "../assets/Paginate.css";
import data from "../assets/data.json";

export default function Investors() {
  const items = data.items;
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 10;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / 10);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 10) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Box
        width={["90%", null, "50%"]}
        margin={["1rem auto 2rem auto", null, "auto"]}
      >
        <Box margin={"auto"} borderBottom={"solid white"}>
          <Box>
            <Box
              width={"11rem"}
              bgColor={"foreground"}
              color={"background"}
              border={"solid white"}
            >
              <Heading size={"sm"}>Nexus foundation</Heading>

              <Text size={"sm"}>Formerly by nexus</Text>
            </Box>
          </Box>
        </Box>
        <Flex
          width={["85%", null, "100%"]}
          margin={["auto", null, 0]}
          flexDirection={"column"}
          alignItems={["center", null, "flex-start"]}
        >
          <Items currentItems={currentItems} />
        </Flex>
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
      </Box>
    </>
  );
}

function Items({ currentItems }) {
  return currentItems.map(({ data, date, link }) => (
    <>
      <Box
        margin={["auto", null, 0]}
        padding={"1rem 0 1rem 0"}
        borderBottom={"solid gray 1px"}
        minWidth={"100%"}
      >
        <Link fontStyle={"italic"} color={"#87ceeb"} href={link} isExternal>
          {data}
        </Link>
        {date && <Text color={"gray"}>{date}</Text>}
      </Box>
    </>
  ));
}
