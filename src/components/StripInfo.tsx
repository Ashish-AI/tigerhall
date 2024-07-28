import { Box, Flex, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { IconBaseProps } from "react-icons";

export const StripInfo = ({
  icon,
  value,
}: {
  icon: ReactElement<IconBaseProps>;
  value: string;
}) => {
  return (
    <Box
      px={"8px"}
      borderRadius={"full"}
      py={"3px"}
      bg={"black"}
      opacity={"70%"}
    >
      <Flex justifyContent={"center"} alignItems={"center"}>
        {icon}
        <Text variant={"xsHeaderBold"} ml={1}>
          {value}
        </Text>
      </Flex>
    </Box>
  );
};
