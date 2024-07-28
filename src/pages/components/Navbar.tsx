import React from "react";
import { Flex, Box, useBreakpointValue, Image } from "@chakra-ui/react";
import TigerHallLogoBase from "../../assets/tigerhall-logo.svg";
import TigerHallLogoMd from "../../assets/tigerhall-horizontal.svg";
import TextField from "../../components/TextField";
import { IoClose, IoSearch } from "react-icons/io5";
import { useSearch } from "../../providers/SearchProvider";

const Navbar = () => {
  // Determine the logo to display based on the viewport size
  const brandLogo = useBreakpointValue({
    base: TigerHallLogoBase as unknown as string,
    md: TigerHallLogoMd as unknown as string,
  });

  // Access search state and updater from the SearchContext
  const { searchValue, setSearchValue } = useSearch();

  // Right element in the search input, a close icon to clear the search field
  const rightElement = (
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
      onClick={() => setSearchValue("")} // Clears the search field on click
      cursor={"pointer"}
    >
      <IoClose />
    </Box>
  );

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding={4}
      borderBottom="1px"
      borderColor="darkGrey.500"
    >
      {/* Left side of the Navbar with the brand logo */}
      <Box flex={1}>
        <Image src={brandLogo} alt="brand-logo" />
      </Box>
      {/* Center section with the search field */}
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
          rightElement={searchValue ? rightElement : null} // Show clear button if searchValue is not empty
        />
      </Box>
      {/* Empty box to push the content to the center */}
      <Box flex={1} />
    </Flex>
  );
};

export default Navbar;
