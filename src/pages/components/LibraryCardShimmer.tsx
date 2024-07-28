import React from "react";
import {
  Box,
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  useBreakpointValue,
} from "@chakra-ui/react";

const ShimmerLibraryCard = () => {
  const noOfLines = useBreakpointValue({ base: 1, md: 3, lg: 1, xl: 3 });

  return (
    <Box
      boxShadow="0px 1px 8px 0px #0000004D"
      borderRadius="lg"
      overflow="hidden"
      height={280}
      cursor={"pointer"}
      display="flex"
      flexDirection="column"
      backgroundColor="gray.800"
    >
      <Box position="relative" width="100%" height={120}>
        <Skeleton
          height="100%"
          width="100%"
          borderRadius="md"
          startColor="gray.700"
          endColor="gray.800"
        >
          <Box height="100%" width="100%" bg="gray.700" />
        </Skeleton>

        <Flex
          position="absolute"
          top={0}
          left={0}
          p="2"
          borderBottomRightRadius={"base"}
          backgroundColor={"gray.900"}
          flexDirection={"row"}
          alignItems="center"
        >
          <SkeletonCircle size="12" startColor="gray.700" endColor="gray.800" />
          <Skeleton
            height="4"
            width="24"
            ml={2}
            startColor="gray.700"
            endColor="gray.800"
          />
        </Flex>

        <Box
          position="absolute"
          height={6}
          width={6}
          bottom={2}
          left={2}
          bg={"gray.900"}
          borderRadius={"full"}
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <SkeletonCircle size="6" startColor="gray.700" endColor="gray.800" />
        </Box>

        <Box position="absolute" bottom={2} right={2}>
          <Skeleton
            height="6"
            width="24"
            startColor="gray.700"
            endColor="gray.800"
          />
        </Box>
      </Box>
      <Skeleton
        height="4"
        width="full"
        mt="2"
        startColor="gray.700"
        endColor="gray.800"
      />
      <Box
        p={2}
        backgroundColor={"gray.900"}
        borderBottomRadius="lg"
        overflow="hidden"
        flex={1}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Box>
          <Skeleton
            height="4"
            width="24"
            startColor="gray.700"
            endColor="gray.800"
          />
          <Skeleton
            height="4"
            width="full"
            mt={"2px"}
            noOfLines={noOfLines}
            startColor="gray.700"
            endColor="gray.800"
          />
          <Flex flexDirection={"column"} mt={1}>
            <Skeleton
              height="4"
              width="24"
              startColor="gray.700"
              endColor="gray.800"
            />
            <Skeleton
              height="4"
              width="20"
              startColor="gray.700"
              endColor="gray.800"
            />
          </Flex>
        </Box>

        <Box display="flex" alignItems="center" justifyContent={"flex-end"}>
          <SkeletonCircle size="6" startColor="gray.700" endColor="gray.800" />
          <Box ml={3}>
            <SkeletonCircle
              size="6"
              startColor="gray.700"
              endColor="gray.800"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ShimmerLibraryCard;
