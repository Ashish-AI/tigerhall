import { Box } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { IconBaseProps, IconType } from "react-icons";

interface IconButtonProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  icon: ReactElement<IconBaseProps>;
  size?: number;
  color?: string;
  variant?: "ghost" | "outlined" | "filled";
  backgroundColor?: string;
}

export default function IconButton({
  onClick,
  icon,
  size = 16,
  color,
  variant = "ghost",
  backgroundColor = "tigerOrange.600",
}: IconButtonProps) {
  // Determine styles based on variant
  const padding = variant === "ghost" ? 0 : "6px";
  const bgColor = variant === "filled" ? backgroundColor : "";
  const borderRadius = variant === "ghost" ? "0" : "full";
  const iconSize = variant === "ghost" ? size : size - 6;
  const borderColor = variant === "outlined" ? backgroundColor : "";
  const borderWidth = variant === "outlined" ? 1 : 0;

  // Clone the icon element with updated props
  const iconElement = React.cloneElement(icon, {
    size: iconSize,
    color,
  });
  return (
    <Box
      onClick={onClick}
      cursor={"pointer"}
      padding={padding}
      backgroundColor={bgColor}
      borderRadius={borderRadius}
      borderColor={borderColor}
      borderWidth={borderWidth}
    >
      {iconElement}
    </Box>
  );
}
