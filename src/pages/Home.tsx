import React from "react";
import Library from "./components/Library";
import Navbar from "./components/Navbar";
import { useQuery } from "@apollo/client";
import { GET_DATA } from "../queries/fetchData";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Library />
    </div>
  );
}
