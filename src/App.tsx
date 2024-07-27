import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utils/theme";
import ApolloProviderComponent from "./providers/AppoloProviderComponent";

const App = () => {
  return (
    <Router>
      <ApolloProviderComponent>
        <ChakraProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            {/* // For invalid route; handle if time permits //
          <Route path="*" element={<Home />} /> */}
          </Routes>
        </ChakraProvider>
      </ApolloProviderComponent>
    </Router>
  );
};

export default App;
