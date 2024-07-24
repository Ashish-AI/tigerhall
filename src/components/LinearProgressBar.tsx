import { Progress, ResponsiveValue } from "@chakra-ui/react";
import React from "react";

type Props = {
  value: number;
  height?: number | string | undefined;
};

export default function LinearProgressBar({ height = "2px", value }: Props) {
  return (
    <Progress
      value={value}
      height={height}
      borderRadius="full"
      bg="#DEDBD4"
      colorScheme="orange"
    />
  );
}
