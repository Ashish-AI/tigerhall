import React, { useState, useEffect, useCallback } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { LibraryCard } from "./LIbraryCard";

const Library = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = useCallback(async (page) => {
    setLoading(true);
    // Simulate an API call
    setTimeout(() => {
      const newItems = new Array(15).fill({
        title: "Peak Performance: Going From Good to Great with Simon Taudel",
        category: "COMMUNICATING AS A LEADER",
        author: "Jane Doe",
        organization: "Subway APAC",
        time: "20m",
        progress: "30% Completed",
        imageUrl: "https://via.placeholder.com/120",
      });
      setItems((prevItems) => [...prevItems, ...newItems]);
      setLoading(false);
      // If there's no more data to load
      if (newItems.length === 0) {
        setHasMore(false);
      }
    }, 1000);
  }, []);

  useEffect(() => {
    fetchData(page);
  }, [fetchData, page]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    )
      return;

    setPage((prevPage) => prevPage + 1);
  }, [loading]);

  useEffect(() => {
    if (hasMore) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll, hasMore]);

  return (
    <Box padding="62px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 5 }} spacing="8">
        {items.map((item, index) => (
          <LibraryCard key={index} />
        ))}
      </SimpleGrid>
      {loading && <p>Loading...</p>}
    </Box>
  );
};

export default Library;
