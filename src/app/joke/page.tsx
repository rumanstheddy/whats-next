import React from "react";

interface Joke {
  id: String;
  joke: String;
}

const DadJokePage = async () => {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const jokeObj: Joke = await res.json();

  return <div>{jokeObj.joke}</div>;
};

export default DadJokePage;
