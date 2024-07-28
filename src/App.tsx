import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utils/theme";
import ApolloProviderComponent from "./providers/AppoloProviderComponent";
import { SearchProvider } from "./providers/SearchProvider";

const App = () => {
  return (
    <Router>
      <ApolloProviderComponent>
        <ChakraProvider theme={theme}>
          <SearchProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </SearchProvider>
        </ChakraProvider>
      </ApolloProviderComponent>
    </Router>
  );
};

export default App;
