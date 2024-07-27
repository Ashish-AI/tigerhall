import { Box, Image, Text, Flex } from "@chakra-ui/react";
import React from "react";
import ProgressCircle from "../../components/CircularProgress";
import LinearProgressBar from "../../components/LinearProgressBar";
import { BsHeadphones } from "react-icons/bs";
import { LuShare2 } from "react-icons/lu";
import { GrBookmark } from "react-icons/gr";
import IconButton from "../../components/IconButton";
import { ContentCard } from "../../utils/types";
import { isNil } from "lodash";

export const LibraryCard = ({ data }: { data: ContentCard }) => {
  if (isNil(data)) {
    return;
  }
  const { categories, experts, image, name } = data;

  console.log(data);

  return (
    <Box
      boxShadow="0px 1px 8px 0px #0000004D"
      borderRadius="lg"
      overflow="hidden"
      height={272}
      cursor={"pointer"}
    >
      <Box position="relative" width="100%">
        <Image
          src={image.uri}
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

        <Box
          position="absolute"
          height={6}
          width={6}
          bottom={2}
          left={2}
          bg={"tigerOrange.600"}
          borderRadius={"full"}
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <BsHeadphones />
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

        <Box
          display="flex"
          mt="2"
          alignItems="center"
          justifyContent={"flex-end"}
        >
          <IconButton color={"#FF5900"} size={18} icon={<LuShare2 />} />
          <Box ml={3}>
            <IconButton color={"#FF5900"} size={18} icon={<GrBookmark />} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
