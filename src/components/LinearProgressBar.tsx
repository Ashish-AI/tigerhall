import { Progress, ResponsiveValue } from "@chakra-ui/react";
import React from "react";

type Props = {
  value: number;
  height?: number | string | undefined;
};

export default function LinearProgressBar({ height = "2px", value }: Props) {
  // Showing some progress even if vakue is 0 so that UI does not look like a divider
  let val = value === 0 ? 2 : value;

  return (
    <Progress
      value={val}
      height={height}
      borderRadius="full"
      bg="#DEDBD4"
      colorScheme="orange"
    />
  );
}
