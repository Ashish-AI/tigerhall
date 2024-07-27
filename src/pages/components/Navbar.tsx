import React, { useCallback, useEffect } from "react";
import { Flex, Box, useBreakpointValue, Image } from "@chakra-ui/react";
import TigerHallLogoBase from "../../assets/tigerhall-logo.svg";
import TigerHallLogoMd from "../../assets/tigerhall-horizontal.svg";
import TextField from "../../components/TextField";
import { IoClose, IoSearch } from "react-icons/io5";
import { useLazyQuery } from "@apollo/client";
import { GET_DATA } from "../../queries/fetchData";
import { debounce } from "lodash";
import { useSearch } from "../../contexts/SearchContext"; // Import useSearch

const Navbar = () => {
  const brandLogo = useBreakpointValue({
    base: TigerHallLogoBase as unknown as string,
    md: TigerHallLogoMd as unknown as string,
  });

  const { searchValue, setSearchValue } = useSearch();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding={4}
      borderBottom="1px"
      borderColor="darkGrey.500"
    >
      <Box flex={1}>
        <Image src={brandLogo} alt="brand-logo" />
      </Box>
      <Box
        flex={5}
        marginLeft={{ base: "1rem", md: "0" }}
        maxWidth={{ base: "100%", md: "40rem" }}
        alignSelf={"center"}
      >
        <TextField
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          leftElement={<IoSearch />}
          rightElement={
            searchValue ? (
              <Box
                height={6}
                width={6}
                bottom={2}
                left={2}
                bg={"tigerOrange.600"}
                borderRadius={"full"}
                display="flex"
                justifyContent={"center"}
                alignItems={"center"}
                onClick={() => setSearchValue("")}
                cursor={"pointer"}
              >
                <IoClose />
              </Box>
            ) : null
          }
        />
      </Box>
      <Box flex={1} />
    </Flex>
  );
};

export default Navbar;
