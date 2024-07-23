import React from "react";
import {
  Flex,
  Box,
  Text,
  useBreakpointValue,
  Img,
  Image,
} from "@chakra-ui/react";
import TextField from "./TextField";
import TigerHallLogoBase from "../assets/tigerhall-logo.svg";
import TigerHallLogoMd from "../assets/tigerhall-horizontal.svg";

const Navbar = () => {
  const brandLogo = useBreakpointValue({
    base: TigerHallLogoBase as unknown as string,
    md: TigerHallLogoMd as unknown as string,
  });

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Image src={brandLogo} alt="Brand logo" />

      <Box
        flex="1"
        marginLeft={{ base: "1rem", md: "0" }}
        maxWidth={{ base: "100%", md: "40rem" }}
        alignSelf={"center"}
      >
        <TextField type="password" />
      </Box>

      <Box />
    </Flex>
  );
};

export default Navbar;
