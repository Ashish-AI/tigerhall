import { AddIcon, BellIcon, InfoIcon } from "@chakra-ui/icons";
import { Box, IconButton, Image, Text, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import ProgressCircle from "../../components/CircularProgress";
import LinearProgressBar from "../../components/LinearProgressBar";
import TigerIconButton from "./IconButton";
import HeadPhone from "../../assets/headphone.svg";
import BookMark from "../../assets/bookmark.svg";
import ShareNode from "../../assets/share-node.svg";
import Clock from "../../assets/clock.svg";

export const LibraryCard = () => {
  return (
    <Box
      boxShadow="0px 1px 8px 0px #0000004D"
      borderRadius="lg"
      overflow="hidden"
      height={272}
    >
      <Box position="relative" width="100%">
        <Image
          src="https://s3-alpha-sig.figma.com/img/2a4a/51e2/be5e328dff67a8423a41026cef565d5f?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DqIaqvqv7ce7mLER9y0y622DLRWRdDdo9BwKAsHisY3R42yeMDgX2VsofSwi7qqelayUtsEBHD0Nh~8HBf~RhKsluiUQYuNIRegBocws2iiCvakr~IuDS6mJ~ihCPDIL2Lfj2T2ZThvFZTB9C5V5Y0p~axJjZ5-CXUsG4tuhE~yFWf0q5jvNZxgE-hwn0-LWZ6-8ooQxAtMKINxvK1PnQi1H1X8sIJPUcE~TaEZCIjgufX17IqwdPwrQQtPzZ8Z4CrUtWrYMn-aqNm5iz7khExkJghHVja~VGWgsToGkPpAxkXfUgNdDcss4B86tJ9ZLcTZgfokpLNanA5oNh7Lr0g__"
          height={120}
          width="100%"
          objectFit="cover"
          alt="Sunset"
        />

        <Flex
          position="absolute"
          top={0}
          left={0}
          p="2"
          borderBottomRightRadius={"base"}
          backgroundColor={"tigerOrange.50"}
          flexDirection={"row"}
          alignItems="center"
        >
          <ProgressCircle percentage={30} />
          <Text textColor={"grey.900"} textStyle={"xsHeaderBold"} ml={1}>
            30% Completed
          </Text>
        </Flex>

        <Box position="absolute" bottom={2} left={2}>
          <TigerIconButton
            icon={<HeadPhone />}
            onClick={() => {}}
            tooltipLabel="Coming soon"
          />
        </Box>

        <Box position="absolute" bottom={2} right={2}></Box>
      </Box>
      <LinearProgressBar value={30} />
      <Box p={2} backgroundColor={"white"}>
        <Text textStyle={"xsHeaderMedium"} color={"grey.700"}>
          COMMUNICATING AS A LEADER
        </Text>
        <Text textStyle={"mdHeaderBold"} color="black" mt={"2px"}>
          Peak Performance: Going From Good to Great with Simon Taudel
        </Text>
        <Flex flexDirection={"column"} mt={1}>
          <Text variant={"xsHeaderMedium"} color="grey.800">
            Jane Doe
          </Text>
          <Text variant={"xsHeaderBold"} color="grey.700">
            Subway APAC
          </Text>
        </Flex>

        <Box display="flex" mt="2" alignItems="center">
          <IconButton
            aria-label="Share"
            icon={<BellIcon />}
            size="sm"
            variant="ghost"
            ml="auto"
          />
          <IconButton
            aria-label="Bookmark"
            icon={<InfoIcon />}
            size="m"
            variant="ghost"
          />
        </Box>
      </Box>
    </Box>
  );
};
