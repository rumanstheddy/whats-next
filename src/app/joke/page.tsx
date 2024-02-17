"use client";
import React from "react";
import useSWR from "swr";

const DadJokePage = () => {
  const options = {
    headers: {
      Accept: "application/json",
    },
  };
  const fetcher = (url: RequestInfo) =>
    fetch(url, options).then((res) => res.json());
  const { data, isLoading, mutate } = useSWR(
    "https://icanhazdadjoke.com/",
    fetcher
  );

  return (
    <div>
      <p className="block">{isLoading ? "..." : data.joke}</p>
      <button
        className="bg-black hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={async () => await mutate()}
      >
        Change the Joke
      </button>
    </div>
  );
};

export default DadJokePage;
