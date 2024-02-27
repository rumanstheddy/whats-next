"use client";
import { useRouter } from "next/navigation";
import React from "react";
import useSWR from "swr";

const DadJokePage = () => {
  const options = {
    headers: {
      Accept: "application/json",
    },
  };

  const router = useRouter();

  const fetcher = (url: RequestInfo) =>
    fetch(url, options).then((res) => res.json());

  const { data, isLoading, mutate } = useSWR(
    "https://icanhazdadjoke.com/",
    fetcher
  );

  return (
    <div className="font-rubik h-screen w-screen flex flex-col justify-center items-center">
      <p className="block text-3xl mb-5 text-center italic">
        {isLoading ? "..." : data.joke}
      </p>
      <button
        className="bg-black hover:bg-blue-900 text-white py-2 px-4 rounded w-fit mt-5"
        type="button"
        onClick={async () => await mutate()}
      >
        Change the Joke
      </button>
      <button
        type="button"
        className="text-2xl font-rubik underline hover:underline hover:text-blue-500 mt-5"
        onClick={() => router.back()}
      >
        back
      </button>
    </div>
  );
};

export default DadJokePage;
