import { Box } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { IconBaseProps, IconType } from "react-icons";

interface IconButtonProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  icon: ReactElement<IconBaseProps>;
  size?: number;
  color?: string;
}

export default function IconButton({
  onClick,
  icon,
  size = 16,
  color,
}: IconButtonProps) {
  // Clone the icon element with updated props
  const iconElement = React.cloneElement(icon, {
    size,
    color,
  });
  return (
    <Box onClick={onClick} cursor="pointer">
      {iconElement}
    </Box>
  );
}
