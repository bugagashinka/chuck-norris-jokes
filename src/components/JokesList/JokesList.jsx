import React from "react";
import JokeCard from "components/JokeCard";

const JokesList = () => {
  return (
    <>
      <JokeCard styleClassPrefix="filtered" tagList={[{ name: "Celebrity" }]} />
      <JokeCard styleClassPrefix="filtered" tagList={[{ name: "Celebrity" }]} />
      <JokeCard styleClassPrefix="filtered" tagList={[{ name: "Celebrity" }]} />
    </>
  );
};

export default JokesList;
