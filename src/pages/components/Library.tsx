import React, { useCallback, useEffect } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { LibraryCard } from "./LIbraryCard";
import { useSearch } from "../../contexts/SearchContext";
import { useLazyQuery } from "@apollo/client";
import { debounce } from "lodash";
import { GET_DATA } from "../../queries/fetchData";

const Library = () => {
  const { searchValue, setSearchValue } = useSearch();

  const [getData, { loading, data, error }] = useLazyQuery(GET_DATA);

  const debouncedGetData = useCallback(
    debounce((value) => {
      console.log("Debouncing", value);
      getData({ variables: { keywords: value } });
    }, 300),
    [getData]
  );

  useEffect(() => {
    if (searchValue) {
      debouncedGetData(searchValue);
    }
  }, [searchValue, debouncedGetData]);

  return (
    <Box padding="62px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 5 }} spacing="8">
        {Array.from({ length: 15 }).map((item, index) => (
          <LibraryCard key={index} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Library;
