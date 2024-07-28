import React, { useCallback, useEffect, useState, useRef } from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { useLazyQuery } from "@apollo/client";
import { debounce, isNil } from "lodash";
import { GET_DATA } from "../../queries/fetchData";
import { ContentCard } from "../../utils/types";
import { mockData } from "../../utils/mock";
import GenericFullPage from "../../components/GenericFullPage";
import TigerMusic from "../../assets/tiger-music.json";
import TigerError from "../../assets/tiger-error.json";
import LibraryCardShimmer from "./LibraryCardShimmer";
import { useSearch } from "../../providers/SearchProvider";
import { LibraryCard } from "./LIbraryCard";
import { getResizedImageUrl } from "../../utils/helpers";

const LIMIT = 15; // Number of items per page

const subtitle = (
  <Text fontSize="lg" color="white.600" textAlign={"center"}>
    Just start typing, and we'll bring you the most{" "}
    <Text as="span" fontWeight="bold" color="tigerOrange.600">
      purr-fect
    </Text>{" "}
    content!
  </Text>
);

const Library = () => {
  // Get search value from SearchContext
  const { searchValue } = useSearch();
  // Offset for pagination
  const [offset, setOffset] = useState(0);
  const [items, setItems] = useState<ContentCard[]>([]);
  // Total number of items
  const [totalItems, setTotalItems] = useState(0);
  // IntersectionObserver instance
  const observer = useRef<IntersectionObserver | null>(null);
  // Sentinel element for triggering pagination
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Lazy query to fetch data with Apollo Client
  const [getData, { loading, data, error, refetch }] = useLazyQuery(GET_DATA, {
    variables: { limit: LIMIT, offset: 0, keywords: searchValue || "" },
  });

  // Debounced function to fetch data when search value changes
  const debouncedGetData = useCallback(
    debounce((value) => {
      getData({ variables: { keywords: value, limit: LIMIT, offset: 0 } });
    }, 300),
    [getData]
  );

  // Effect to fetch data when search value changes
  useEffect(() => {
    if (searchValue) {
      setOffset(0); // Reset offset for new search
      setItems([]); // Clear existing items
      debouncedGetData(searchValue); // Fetch new data
    }
  }, [searchValue, debouncedGetData]);

  // Effect to handle new data and update state
  useEffect(() => {
    if (data) {
      if (offset === 0) {
        setItems(data.contentCards.edges); // Set new items
        setTotalItems(data.contentCards.meta.total); // Update total items
      } else {
        setItems((prevItems) => [...prevItems, ...data.contentCards.edges]); // Append new items
      }
    }
  }, [data, offset]);

  // Function to load more items on scroll
  const loadMore = () => {
    const newOffset = offset + LIMIT;
    if (newOffset >= totalItems) {
      return; // Stop if we've reached the end
    }
    getData({
      variables: {
        limit: LIMIT,
        offset: newOffset,
        keywords: searchValue,
      },
    });
    setOffset(newOffset); // Update offset for next fetch
  };

  // Effect to set up IntersectionObserver for infinite scroll
  useEffect(() => {
    if (loading) {
      return;
    }
    if (observer.current) {
      observer.current.disconnect(); // Disconnect previous observer
    }
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore(); // Load more items when sentinel is in view
        }
      },
      {
        rootMargin: "100px",
      }
    );

    if (sentinelRef.current) observer.current.observe(sentinelRef.current); // Observe the sentinel element
  }, [loading, loadMore]);

  // Loading state
  if (loading && items.length === 0) {
    return (
      <Box px="62px" pb={"62px"} pt={{ base: "40px", md: "60px" }}>
        <Text
          as={"h1"}
          color={"white"}
          mb={10}
          textStyle={"headerBold"}
          textAlign={{ base: "center", md: "left" }}
        >
          Tigerhall Library
        </Text>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 4, xl: 5 }} spacing="8">
          {Array.from({ length: 15 }).map((item, index) => (
            <LibraryCardShimmer key={index} /> // Show shimmer effect while loading
          ))}
        </SimpleGrid>
      </Box>
    );
  }

  // Empty state
  if (!loading && data?.contentCards?.edges?.length === 0) {
    return (
      <GenericFullPage
        lottie={TigerMusic}
        title="Tiger on a relaxation break!"
        subtitle="It looks like there's nothing here. We’ll have more for you soon!"
      />
    );
  }

  // Zero state (when there's no data and not loading)
  if (isNil(data) && !loading) {
    return (
      <GenericFullPage title="Our tiger's on standby!" subtitle={subtitle} />
    );
  }

  // Error state
  if (error) {
    return (
      <GenericFullPage
        lottie={TigerError}
        title="Oops! Something went wrong."
        subtitle="We couldn't fetch the content. Please try again later."
        ctaLabel="Retry"
        onClick={() => {
          refetch(); // Retry fetching data on button click
        }}
      />
    );
  }

  // Main content display
  return (
    <Box px="62px" pb={"62px"} pt={{ base: "40px", md: "60px" }}>
      <Text
        as={"h1"}
        color={"white"}
        mb={10}
        textStyle={"headerBold"}
        textAlign={{ base: "center", md: "left" }}
      >
        Tigerhall Library
      </Text>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 4, xl: 5 }} spacing="8">
        {/* Uncomment this section to use mock data for testing */}
        {/* {mockData.data.contentCards?.edges?.map((item, index) => (
          <LibraryCard key={index} data={item} />
        ))} */}

        {items.map((item: ContentCard, index: number) => (
          <LibraryCard key={index} data={item} /> // Display each content card
        ))}
      </SimpleGrid>
      <div ref={sentinelRef}></div> {/* Sentinel for infinite scroll */}
    </Box>
  );
};

export default Library;
