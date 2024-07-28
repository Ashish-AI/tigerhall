import React, { useCallback, useEffect, useState, useRef } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { useSearch } from "../../contexts/SearchContext";
import { useLazyQuery } from "@apollo/client";
import { debounce, isNil } from "lodash";
import { GET_DATA } from "../../queries/fetchData";
import ZeroState from "../../components/ZeroState";
import { ContentCard } from "../../utils/types";
import { LibraryCard } from "./LIbraryCard";

const LIMIT = 4; // Number of items per page

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
    if (loading) return;
    if (observer.current) observer.current.disconnect();

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

  if (isNil(data) && !loading) {
    return <ZeroState />;
  }

  return (
    <Box padding="62px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 5 }} spacing="8">
        {items.map((item: ContentCard, index: number) => (
          <LibraryCard key={index} data={item} />
        ))}
      </SimpleGrid>
      <div ref={sentinelRef}></div>
    </Box>
  );
};

export default Library;
