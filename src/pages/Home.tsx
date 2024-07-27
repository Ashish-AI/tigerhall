import React from "react";
import Library from "./components/Library";
import Navbar from "./components/Navbar";
import { useQuery } from "@apollo/client";
import { GET_DATA } from "../queries/fetchData";

export default function Home() {
  // const { loading, error, data } = useQuery(GET_DATA);

  // // Update UI later if time permits
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Navbar />
      <Library />
    </div>
  );
}
