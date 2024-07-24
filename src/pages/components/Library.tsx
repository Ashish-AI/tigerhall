import {
  Box,
  SimpleGrid,
  Image,
  Text,
  Badge,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { BellIcon, InfoIcon } from "@chakra-ui/icons";
import { LibraryCard } from "./LIbraryCard";
import ProgressCircle from "../../components/CircularProgress";

const Library = () => {
  const items = new Array(15).fill({
    title: "Peak Performance: Going From Good to Great with Simon Taudel",
    category: "COMMUNICATING AS A LEADER",
    author: "Jane Doe",
    organization: "Subway APAC",
    time: "20m",
    progress: "30% Completed",
    imageUrl: "https://via.placeholder.com/120",
  });

  return (
    <Box padding="62px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 5 }} spacing="8">
        {items.map((item, index) => (
          <LibraryCard />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Library;
