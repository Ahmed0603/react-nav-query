import { AppContext } from "../App";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import Axios from "axios";

export const Home = () => {
  const { username } = useContext(AppContext);

  const {
    data: catData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["cat"],
    queryFn: () => {
      return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    },
  });

  if (isLoading) {
    return <h1> Loading... </h1>;
  }

  if (isError) {
    return <h1> Sorry, there was an error</h1>;
  }

  return (
    <h1>
      {" "}
      Welcome, {username} This is the home page.
      <p> {catData?.fact} </p> <button onClick={refetch}> Update Data</button>
    </h1>
  );
};
