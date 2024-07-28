import React from "react";
import {
  Box,
  Flex,
  Skeleton,
  SkeletonCircle,
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
          height="full"
          width="full"
          startColor="gray.700"
          endColor="gray.800"
        />
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
