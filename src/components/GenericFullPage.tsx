import { Flex, Text } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import TigerChilling from "../assets/tiger-chilling.json";
import TigerButton from "./TigerButton";

interface GenericFullPageProps {
  title?: string;
  subtitle?: React.ReactNode;
  lottie?: any;
  ctaLabel?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const GenericFullPage: React.FC<GenericFullPageProps> = ({
  title,
  subtitle,
  lottie,
  ctaLabel,
  onClick,
}) => {
  return (
    <Flex
      flexDirection="column"
      align="center"
      justify="center"
      height="calc(100vh - 80px)"
      width="100vw"
      px={4}
      data-testid="zero-state"
    >
      <Player
        autoplay
        loop
        src={lottie ?? TigerChilling}
        style={{ height: "300px", width: "300px" }}
      />
      <Text
        fontSize={32}
        variant="formulaHeader"
        color="teal.300"
        mb={4}
        textAlign={"center"}
      >
        {title}
      </Text>

      {subtitle ? (
        typeof subtitle === "string" ? (
          <Text fontSize="lg" color="white.600" textAlign={"center"}>
            {subtitle}
          </Text>
        ) : (
          subtitle
        )
      ) : null}
      {ctaLabel ? (
        <TigerButton ctaLabel={ctaLabel} mt={10} onClick={onClick} />
      ) : null}
    </Flex>
  );
};

export default GenericFullPage;
