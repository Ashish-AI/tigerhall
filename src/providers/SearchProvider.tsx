import React, { createContext, useContext, useState, ReactNode } from "react";

// Type for the context value
interface SearchContextType {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

// Default value for context
const defaultContextValue: SearchContextType = {
  searchValue: "",
  setSearchValue: () => {},
};

const SearchContext = createContext<SearchContextType>(defaultContextValue);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
