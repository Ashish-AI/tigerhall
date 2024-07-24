import React, { useState } from "react";
import {
  Flex,
  Box,
  Text,
  useBreakpointValue,
  Img,
  Image,
} from "@chakra-ui/react";
import TigerHallLogoBase from "../../assets/tigerhall-logo.svg";
import TigerHallLogoMd from "../../assets/tigerhall-horizontal.svg";
import TextField from "../../components/TextField";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  const brandLogo = useBreakpointValue({
    base: TigerHallLogoBase as unknown as string,
    md: TigerHallLogoMd as unknown as string,
  });

  const [searchValue, setSearchValue] = useState<string | undefined>(undefined);

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
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          leftElement={<IoSearch />}
        />
      </Box>
      <Box flex={1} />
    </Flex>
  );
};

export default Navbar;
