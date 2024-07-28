import { Box, Image, Text, Flex, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import ProgressCircle from "../../components/CircularProgress";
import LinearProgressBar from "../../components/LinearProgressBar";
import { BsHeadphones } from "react-icons/bs";
import { LuShare2 } from "react-icons/lu";
import { GrBookmark } from "react-icons/gr";
import IconButton from "../../components/IconButton";
import { ContentCard } from "../../utils/types";
import { isNil } from "lodash";
import {
  formatTimeFromMinutes,
  getCompletedPercentage,
} from "../../utils/helpers";
import { StripInfo } from "../../components/StripInfo";
import { WiTime3 } from "react-icons/wi";

// Component to display individual content cards in the library
export const LibraryCard = ({ data }: { data: ContentCard }) => {
  // Return nothing if no data is provided
  if (isNil(data)) {
    return;
  }

  // Destructure properties from the content card data
  const {
    categories,
    participants,
    image,
    preamble,
    length,
    timeSpentOnByUsers,
  } = data;

  // Define number of lines for the text based on screen size
  const noOfLines = useBreakpointValue({ base: 1, md: 3, lg: 1, xl: 3 });

  // Calculate the percentage of content completed
  const timeSpentOnContent = getCompletedPercentage(timeSpentOnByUsers, length);

  // Get the full name and company of the first participant (expert)
  const expertFullName =
    participants[0].firstName + " " + participants[0].lastName;
  const expertCompany = participants[0].company;

  // Get the category name of the content
  const category = categories[0].name;

  return (
    <Box
      boxShadow="0px 1px 8px 0px #0000004D"
      borderRadius="lg"
      overflow="hidden"
      height={280}
      cursor={"pointer"}
      display="flex"
      flexDirection="column"
    >
      <Box position="relative" width="100%" height={120}>
        <Image
          src={image.uri}
          height="100%"
          width="100%"
          objectFit="cover"
          alt="Content Image"
        />

        {/* Progress circle indicating content completion */}
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
          <ProgressCircle percentage={timeSpentOnContent} />
          <Text textColor={"grey.900"} textStyle={"xsHeaderBold"} ml={1}>
            {`${timeSpentOnContent}% Completed`}
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

        {/* Time spent on content displayed at the bottom right */}
        <Box position="absolute" bottom={2} right={2}>
          <StripInfo icon={<WiTime3 />} value={formatTimeFromMinutes(length)} />
        </Box>
      </Box>

      {/* Linear progress bar indicating time spent by users */}
      <LinearProgressBar value={timeSpentOnByUsers} />

      <Box
        p={2}
        backgroundColor={"white"}
        borderBottomRadius="lg"
        overflow="hidden"
        flex={1}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Box>
          {/* Category of the content */}
          <Text textStyle={"xsHeaderMedium"} color={"grey.700"}>
            {category?.toUpperCase()}
          </Text>
          {/* Content preamble */}
          <Text
            textStyle={"mdHeaderBold"}
            color="black"
            mt={"2px"}
            noOfLines={noOfLines}
          >
            {preamble}
          </Text>
          {/* Expert details */}
          <Flex flexDirection={"column"} mt={1}>
            <Text variant={"xsHeaderMedium"} color="grey.800">
              {expertFullName}
            </Text>
            <Text variant={"xsHeaderBold"} color="grey.700" noOfLines={1}>
              {expertCompany}
            </Text>
          </Flex>
        </Box>

        {/* Action buttons */}
        <Box display="flex" alignItems="center" justifyContent={"flex-end"}>
          <IconButton color={"#FF5900"} size={18} icon={<LuShare2 />} />
          <Box ml={3}>
            <IconButton color={"#FF5900"} size={18} icon={<GrBookmark />} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
