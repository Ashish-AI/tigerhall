import React, { useCallback, useEffect, useState, useRef } from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { useSearch } from "../../contexts/SearchContext";
import { useLazyQuery } from "@apollo/client";
import { debounce, isNil } from "lodash";
import { GET_DATA } from "../../queries/fetchData";
import { ContentCard } from "../../utils/types";
import { LibraryCard } from "./LIbraryCard";
import { mockData } from "../../utils/mock";
import GenericFullPage from "../../components/GenericFullPage";
import TigerMusic from "../../assets/tiger-music.json";

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
  const { searchValue } = useSearch();
  const [offset, setOffset] = useState(0);
  const [items, setItems] = useState<ContentCard[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const observer = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const [getData, { loading, data, error }] = useLazyQuery(GET_DATA, {
    variables: { limit: LIMIT, offset: 0, keywords: searchValue || "" },
  });

  const debouncedGetData = useCallback(
    debounce((value) => {
      getData({ variables: { keywords: value, limit: LIMIT, offset: 0 } });
    }, 300),
    [getData]
  );

  useEffect(() => {
    if (searchValue) {
      setOffset(0);
      // Clear items when search value changes
      setItems([]);
      debouncedGetData(searchValue);
    }
  }, [searchValue, debouncedGetData]);

  useEffect(() => {
    if (data) {
      if (offset === 0) {
        setItems(data.contentCards.edges);
        setTotalItems(data.contentCards.meta.total);
      } else {
        setItems((prevItems) => [...prevItems, ...data.contentCards.edges]);
      }
    }
  }, [data, offset]);

  const loadMore = () => {
    const newOffset = offset + LIMIT;
    // Checks if newOffset exceeds total items
    if (newOffset >= totalItems) {
      return;
    }
    getData({
      variables: {
        limit: LIMIT,
        offset: newOffset,
        keywords: searchValue,
      },
    });
    setOffset(newOffset);
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      {
        rootMargin: "100px",
      }
    );

    if (sentinelRef.current) observer.current.observe(sentinelRef.current);
  }, [loading, loadMore]);

  // Empty state
  if (!loading && data?.contentCards?.edges?.length === 0) {
    return (
      <GenericFullPage
        lottie={TigerMusic}
        title="Tiger on a relaxation break!"
        subtitle={
          "It looks like there's nothing here. We’ll have more for you soon!"
        }
      />
    );
  }

  // Zero state
  if (isNil(data) && !loading) {
    return (
      <GenericFullPage title="Our tiger's on standby!" subtitle={subtitle} />
    );
  }

  return (
    <Box padding="62px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 4, xl: 5 }} spacing="8">
        {/*/=========DUMMY DATA==========*

 						The API response gives dummy value with some preprty with null/undefined/empty string as value
						Uncomment this to check UI with dummy data

				*/}

        {/* {mockData.data.contentCards?.edges?.map((item, index) => {
          return <LibraryCard key={index} data={item} />;
        })} */}

        {/*/=========DUMMY DATA==========*/}

        {items.map((item: ContentCard, index: number) => (
          <LibraryCard key={index} data={item} />
        ))}
      </SimpleGrid>
      <div ref={sentinelRef}></div>
    </Box>
  );
};

export default Library;
