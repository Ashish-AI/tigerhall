import { IconButton, Tooltip } from "@chakra-ui/react";
import React from "react";

interface IconButtonProps {
  icon: any;
  size?: string | undefined;
  variant?: string | undefined;
  colorScheme?: string | undefined;
  onClick: any;
  disabled?: boolean | undefined;
  isLoading?: boolean | undefined;
  tooltipLabel?: string | undefined;
}

const TigerIconButton = ({
  icon,
  size = "sm",
  variant = "outline",
  colorScheme = "blue",
  onClick,
  disabled = false,
  isLoading = false,
  tooltipLabel = "",
}: IconButtonProps) => {
  const buttonContent = (
    <IconButton
      aria-label={"icon-button"}
      icon={icon}
      size={size}
      variant={variant}
      colorScheme={colorScheme}
      onClick={onClick}
      disabled={disabled || isLoading}
      isLoading={isLoading}
    />
  );

  return tooltipLabel ? (
    <Tooltip
      label={tooltipLabel}
      placement="bottom"
      textStyle={"xsHeaderMedium"}
    >
      {buttonContent}
    </Tooltip>
  ) : (
    buttonContent
  );
};

export default TigerIconButton;
