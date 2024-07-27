import { Flex, Text } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import TigerChilling from "../assets/tiger-chilling.json";

interface ZeroStateProps {
  title?: string;
  subtitle?: React.ReactNode;
}

const ZeroState: React.FC<ZeroStateProps> = ({
  title = "Our tiger's on standby!",
  subtitle,
}) => {
  return (
    <Flex
      flexDirection="column"
      align="center"
      justify="center"
      height="calc(100vh - 80px)"
      width="100vw"
    >
      <Player
        autoplay
        loop
        src={TigerChilling}
        style={{ height: "300px", width: "300px" }}
      />
      <Text variant="formulaHeader" color="teal.300" mb={4}>
        {title}
      </Text>
      <Text fontSize="lg" color="white.600">
        {subtitle ?? (
          <>
            Just start typing, and we'll bring you the most{" "}
            <Text as="span" fontWeight="bold" color="tigerOrange.600">
              purr-fect
            </Text>{" "}
            content!
          </>
        )}
      </Text>
    </Flex>
  );
};

export default ZeroState;
