import React from "react";
import { Button, ButtonProps, Spinner, useStyleConfig } from "@chakra-ui/react";

type TigerButtonProps = {
  isLoading?: boolean;
  isDisabled?: boolean;
  variant?: string;
  colorScheme?: string;
  loadingText?: string;
  ctaLabel: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
} & ButtonProps;

const TigerButton: React.FC<TigerButtonProps> = ({
  isLoading = false,
  isDisabled = false,
  variant = "solid",
  colorScheme = "tigerOrange",
  loadingText = "Loading...",
  ctaLabel,
  onClick,
  ...props
}) => {
  const styles = useStyleConfig("Button", { variant, colorScheme });

  return (
    <Button
      isLoading={isLoading}
      isDisabled={isDisabled}
      variant={variant}
      colorScheme={colorScheme}
      loadingText={loadingText}
      sx={styles}
      onClick={onClick}
      {...props}
    >
      {ctaLabel}
    </Button>
  );
};

export default TigerButton;
