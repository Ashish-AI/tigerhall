import React, { useCallback, useEffect } from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { LibraryCard } from "./LIbraryCard";
import { useSearch } from "../../contexts/SearchContext";
import { useLazyQuery } from "@apollo/client";
import { debounce, isNil } from "lodash";
import { GET_DATA } from "../../queries/fetchData";
import ZeroState from "../../components/ZeroState";
import { ContentCard } from "../../utils/types";

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

  if (isNil(data)) {
    return <ZeroState />;
  }

  return (
    <Box padding="62px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 5 }} spacing="8">
        {data?.contentCards?.edges?.map((item: ContentCard, index: number) => (
          <LibraryCard key={index} data={item} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Library;
